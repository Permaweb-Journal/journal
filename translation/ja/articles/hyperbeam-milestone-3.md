---
title: "HyperBEAM Milestone 3: メインネット上でのLegacynet SU互換性"
description: HyperBEAMがlegacynet実行をサポートするようになりました。なぜ重要なのかをご説明します。
permalink: /article/hyperbeam-milestone-3.html
tags:
---

![Permaweb Header](/static/images/milestone-3-header.png)

## I. はじめに

AO-Core は、従来の中央集権的クラウドモデルから離脱するよう設計された分散コンピューティングプロトコルです。単一のアーキテクチャに依存する代わりに、AO は複数の計算モデル、つまり**Device**が相互作用できる柔軟なフレームワークを提供します。このアプローチにより、**トラストレス、スケーラブル、検閲耐性のある計算**が可能になります。

AO の進化における[最新のマイルストーン](https://github.com/permaweb/HyperBEAM/pull/177)は、**legacynet Process が HyperBEAM 上で実行できるようになった**ことです。これまで、この 2 つのネットワークは隔離されて動作していました。

<div class="tweet-container">
  <img src="/static/images/happy-saturday.png" alt="Tweet screenshot"></div>

## II. このアップデートが可能にすること

以前は、legacynet と HyperBEAM 上の AO Process は別々に実行され、相互作用できませんでした。この最新のアップデートにより、AO-Core は既存の legacynet スケジュールされた Process を直接実行し相互作用できるようになりました。これは以下を意味します：

- **Legacynet Process が HyperBEAM 上で実行可能**になり、引き続き legacynet 環境に結果を返すことができます。
- **計算された Message が legacynet とメインネット Process 間で交換可能**になり、シームレスな相互運用性が可能になります。
- **HyperBEAM ノードが、AO の標準 HTTP 署名フォーマット（~httpsig@1.0）と ANS-104 コーデックの両方を使用して Message のデコード、スケジューリング、保存をサポート**するようになりました。

## III. Legacynet vs. メインネット：違いは何か？

このアップグレードがなぜ重要なのかを理解するためには、この 2 つを区別することが不可欠です：

- **Legacynet**: AO-Core ローンチ前の実験と初期デプロイメント用に設計された AO の元のテストネット。機能的でしたが、Forward Research が提供する無料コンピュートノードへの依存により、スケーラビリティと実行速度に制限がありました。AR.IO などの他の組織も、Arweave と AO 上に構築されたインフラをサポートするために独自のコンピュートノードを運営していました。
- **メインネット（AO-Core）**: AO プロトコルの本番準備済み高性能バージョンで、複数の計算モデルが相互作用できるモジュラー構造で構築され、Arweave 上でステート完全性、検証可能性、分散化を確保します。HyperBEAM は AO-Core のクライアント実装として機能し、開発者が独自のノードを実行し、実行からハードウェアプロビジョニングを抽象化してネットワーク内でサービスを提供できるようにします。

HyperBEAM への最新の**プレビューアップデート**により、AO-Core は**Milestone 3**に近づいています。注目すべき重要なポイント：**AO Process 自体は AO メインネットや legacynet に「存在」するのではなく**、単に**Arweave 上に保存されたデータ**です。このアップデートは、これらの Process が**メインネット上でシームレスに実行可能**になったことを実証しています。

## IV. AO マイルストーン

このアップデートは、legacynet からメインネットへの移行における大きな一歩です。AO のロードマップにおける位置付けは以下の通りです：

### マイルストーン 1（2 月 9 日リリース）

- AO-Core が**candidate-level の安定性**に到達し、基盤インフラを確立しました。
- **支払い Device**を導入し、ユーザーが優先計算のために**オペレーターに支払い**できるようになりました。
- **AOS や aoconnect**などの開発者ツールが支払い機能を統合しました。

![AO-Core Stack](/static/images/ao-core-stack.png)

### マイルストーン 2

- HyperBEAM のフルスタック Devices の**プレビューバージョンを導入**し、AO Process が**HyperBEAM 内でネイティブに実行**できるようになりました。
- **TEE セキュアな実行**を追加し、セキュリティと検証可能性を向上させました。
- 完全な HyperBEAM デモは[こちら](<https://odysee.com/@AO:4/2025.02.25_-_arweave_-_ao_node_workshop-(1080p):c>)をご覧ください。

![AO-Core Stack](/static/images/milestone2.png)

### マイルストーン 3

- **Legacynet Process が AO-Core と互換**になり、テストネット上で構築されたアプリケーションがコード変更なしに**HyperBEAM**上で実行できるようになりました。
- これにより、コミュニティが**無料 legacynet コンピュートクラスターから HyperBEAM AO-Core ノードにアプリケーションを移行**できるようになります。
- **Dexi**は既に HyperBEAM への最初の移行をテストしており、より多くのアプリケーションが続く予定です。

[AO リリース用語についてはこちらで詳しく学んでください](article/ao-nomenclature.md)。

## V. なぜこれが重要なのか

**無料コンピュート = 遅いコンピュート。** legacynet アプリケーションを使用したことがある人なら、需要が利用可能なリソースを上回ることが多いため、遅延を経験したことがあるでしょう。AO メインネットがローンチした際、多くの人が即座のパフォーマンス向上を期待しました。しかし、Forward Research が提供する legacynet コンピュートクラスターは以下の理由で稼働し続けました：

1. **アプリケーションが移行できる前に、ネットワークの安定性をテストする必要**がありました。

2. **分散計算のために新しいノードオペレーターが HyperBEAM にオンボードする必要**がありました。

現在、Milestone 3 により、legacynet Process が HyperBEAM 上で実行でき、この移行はダウンタイムなしで行われています。これが可能なのは、両ネットワークが Arweave 上に保存された同じデータ構造を使用するためです。開発者はメインネット用に新しい Process を作成する必要はありません。代わりに、既存の legacynet Process を HyperBEAM 上で実行できるようになりました。

開発者が祝っている重要な改善は、HyperBEAM が dry-run なしに AO Process 用の完全な HTTP API を提供するようになったことです。以前、開発者は Process 上で Message の実行をシミュレートする必要がありました。このアップデートにより、HyperBEAM は外部ソースからの直接データ呼び出しを可能にし、開発者とユーザーの両方にとってパフォーマンスを大幅に向上させました。

AO-Core は既に安定していますが、HyperBEAM は candidate release ステータスに到達する前に大規模テストが必要です。現在のシステムは機能的ですが、legacynet 相互作用で Message あたり約 3 秒かかるなど、速度については完全に最適化されていません。今後のアップデートはパフォーマンス向上と追加の移行ツールに焦点を当てます。

## VI. 次は何か？

この大きなマイルストーンの達成により、AO の次の焦点はより多くのアプリケーションを HyperBEAM ノードにオンボーディングすることになります。チームは現在 legacynet 上で実行されている数百万の Process をサポートするためのスケーリングに積極的に取り組んでいます。

この土曜日のアップデートは、AO のインフラ内での相互運用性に向けた重要なステップを示しています。完全な HyperBEAM デプロイメントに向けて進む中で、開発者がこのアップグレードをどのように活用するかを見ることを楽しみにしています。さらなるアップデートにご期待ください！

## Further reading

- [AO mainnet is live](ao-mainnet-live.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)

## Resources

**AO**

- [Website](https://ao.arweave.net/)
- [X](https://x.com/aoTheComputer)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
