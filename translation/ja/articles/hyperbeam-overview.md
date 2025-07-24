---
title: "HyperBEAM：知っておくべきすべてのこと"
description: HyperBEAMは、Permaweb上でのスケーラブルで永続的なアプリのための検証可能なMessageベース計算を支えるAO Coreのクライアント実装です。
permalink:
tags:
---

![Permaweb Header](/static/images/hyperbeam-overview-header.png)

## I. はじめに

HyperBEAM は[AO-Core](ao-core-deepdive.md)プロトコルのリファレンスクライアントです。Erlang で構築され、Permaweb 全体で分散計算を支えるノードソフトウェアとして機能します。従来のブロックチェーンノードとは異なり、HyperBEAM はグローバルコンセンサスではなく Message passing とモジュラー Device を中心に設計されています。

HTTP 上で Message を解釈・合成することで AO プログラムを実行し、検証可能でスケーラブルなオンチェーンコンピュートを可能にします。

[→ GitHub リポジトリを見る](https://github.com/permaweb/HyperBEAM)

## II. HyperBEAM とは何か？

![Permaweb Header](/static/images/hyperbeam-slim-header.png)

HyperBEAM は AO 用の軽量並列ランタイムです。[Erlang の BEAM VM](<https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)>)上で実行され、開発者が以下のことを可能にします：

- HTTP 上で[AO Message](ao-message-passing-explained.md)を提供・実行
- 計算ユニットとしてモジュラー Device を実行
- 中央集権的 API や従来の RPC なしで動作
- 永続的ストレージバックエンドとして[Arweave と相互作用](fetching-arweave-data-in-ao.md)

各 HyperBEAM ノードは、異なる Device、メータリングシステム、価格設定モデルで設定可能で、誰でもカスタムコンピュート環境を立ち上げることができます。

[→ ノードのセットアップとテスト](https://permaweb.github.io/HyperBEAM/hyperbeam/setup/)

## III. AO-Core とは何か？

[AO-Core](ao-core-deepdive.md)は、決定論的 Message 実行を表す Merkle 様チェーンである**hashpath**のコンセプトを中心に構築された分散計算プロトコルです。

AO-Core の主要な利点：

- Hashpath が検証可能なオンチェーンステート履歴を作成
- 任意のプログラム出力をそのパスで参照可能
- すべての計算が HTTP Message として表現
- Arweave 経由の永続的ストレージと互換

## IV. HyperBEAM での Device の動作

### Device とは何か？

Device は Message がどのように解釈または実行されるかを定義するモジュールです。各 Device は**dev\_**（例：dev_scheduler、dev_stack）がプレフィックスされた Erlang モジュールです。**/your-id~process@1.0/now**のようなパスに Message が送信されると、HyperBEAM は対応する Device を読み込み、その Device のロジックを使用してキー（now）を解決します。

### AO での Device アーキテクチャ

AO Device は、時間とともにミックス、マッチ、アップグレード可能なモジュラー実行ユニットです。すべてのノードがすべての Device を実行する必要はありません。一部のノードは**~wasm64@1.0**のような計算集約的 Device に特化し、他のノードは Message 中継やスケジューリングに焦点を当てる場合があります。Device は多くの場合、Message を処理し、ロジックを実行し、ステートをルーティングし、Process を協調させるために連携します。このアーキテクチャにより、ネットワーク全体でスケーラビリティ、柔軟性、拡張性が確保されます。

Device は固定されていません。追加やアップグレードが可能です。各ノードは、ハードウェアや特定のユースケースに基づいてサポートする Device を選択できます。この柔軟性により、ノードはリソースに最適な方法でコンピュートやストレージを提供できます。

Device は多くの役割を処理できます：

- 一部はコードを実行（例：**~wasm64@1.0**）
- 他は Message を中継または保存
- 一部はタスクをスケジュールまたは計算を検証

この多様性により、AO は単一のコンピュートモデルを強制することなくスケールできます。

### Device 実行フロー

1. HyperBEAM が指定された Device で Message を受信
2. 要求されたキーに関連付けられた関数を見つける
3. 関数が実行され、新しい Message 結果を返す

これらの関数は標準構造に従います：

- 入力：（StateMessage、InputMessage、Environment）
- 出力：{Status、NewMessage}

### Device メタデータ

Device は以下を返す info 関数を公開できます：

- サポートされているキー
- デフォルト handler
- 必要な環境変数

このメタデータは、HyperBEAM が Message をルーティング・実行する方法を最適化するのに役立ちます。

[→ カスタム HyperBEAM Device の構築方法](https://mirror.xyz/0xE84A501212d68Ec386CAdAA91AF70D8dAF795C72/iLNw4j49tiB7XUE6EUayuFXUvdXnG-USTUBjK0HUH9c)

## V. stack device

**~stack@1.0** Device により、単一の Message を複数の Device で順次処理できます。実行レイヤーのスタックを作成し、それぞれが Message に独自の変換を適用します。

これは、より小さな構成要素を使用して複雑なロジックを構築するのに有用です。例えば、AO Process は最初に一つの Device で入力を検証し、次に別の Device でロジックを実行し、三つ目で結果をフォーマットする場合があります。

Device をスタッキングすることで、開発者はモノリシックプログラムを書くことなく、モジュラーで合成可能なコンピュートフローを構築できます。

## VI. HyperBEAM のプリロードされた Device

HyperBEAM は 20 以上の Device を搭載しています。最も一般的なものは以下です：

- **~meta@1.0** — ノードアイデンティティ、ポート、Device リストを設定
- **~relay@1.0** — ノード間 Message transport を処理
- **~process@1.0** — 永続的なマルチユーザープログラムを可能に
- **~wasm64@1.0** — WAMR ランタイムを使用して WASM を実行
- **~json-iface@1.0** — JSON ベースの AOS 2.0 Message を変換
- **~snp@1.0** — TEE（Trusted Execution Environment）証明を提供
- **~stack@1.0** — Device 合成とパイプライニングを可能に
- **~simple-pay@1.0** — フラットフィー価格設定ロジックを実装
- **~p4@1.0** — 価格設定と台帳フックでハードウェアコンピュートサイクルを再販
- **~compute-lite@1.0** — CU ベース legacynet からレガシー AO Process を実行

各 Device はモジュラーで、置き換え、拡張、または合成してカスタムコンピュート環境を構築できます。

[→ HyperBEAM ノード用の Device のセットアップと選択](https://github.com/permaweb/HyperBEAM/blob/main/docs/setting-up-selecting-devices.md#setting-up-and-selecting-devices-for-hyperbeam-node)

## VII. 開発者リソース

以下のオープンソースリポジトリとサポート開発者ドキュメントをご覧ください。

- [GitHub リポジトリ](https://github.com/permaweb/HyperBEAM)
- [AO Cookbook](https://cookbook_ao.arweave.net/)
- [HyperBEAM リファレンスドキュメント](https://permaweb.github.io/HyperBEAM/hyperbeam/)
- [HyperBEAM デモ](<https://odysee.com/@AO:4/2025.02.25_-_arweave_-_ao_node_workshop-(1080p):c?src=embed&t=2688.563113>)

## VIII. 結論

HyperBEAM は AO エコシステムにおける分散コンピュートの基盤です。中央集権的 API、硬直的な仮想マシン、グローバルコンセンサスを、標準 HTTP 上で実行される Message ベース実行モデルに置き換えます。

AO-Core のリファレンスクライアントとして、HyperBEAM は開発者がすべての相互作用が検証可能で、すべての Process がモジュラーで、すべてのステートが Arweave 上に永続的に保存されるアプリケーションを構築できるようにします。ノードをプログラマブルエンドポイントに変換し、モジュラー Device を通じて特殊化されたロジックを実行できます。

このアプローチは従来のブロックチェーンよりも効率的にスケールし、Web ネイティブアプリケーションの構築とホスティングのための新しいモデルを導入します。コンピュートはパーミッションレスになり、ステートは永続的になり、アプリケーションのすべての部分が透明で再現可能になります。

[自律エージェント](https://www.autonomous.finance/research/en-US/dca-agent)を構築している場合でも、WASM プログラムを実行している場合でも、hashpath に支えられた検証可能な API を公開している場合でも、HyperBEAM は次世代オンチェーンアプリケーションを支えるエンジンです。

## Further reading

- [AO-Core Overview](ao-core-deepdive.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
- [How message passing work on AO](ao-message-passing-explained.md)
