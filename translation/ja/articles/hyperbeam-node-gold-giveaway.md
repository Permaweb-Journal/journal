---
title: HyperBEAMノードを実行して純金フロッピーディスクを獲得するチャンス
description: AOノードプレゼントに参加して$10kの金フロッピーディスクを獲得しよう。
permalink:
tags:
---

![Permaweb Header](/static/images/hyperbeam-gold-header.png)

AO チームは、新しいノードオペレーターのオンボーディングと AO ネットワークの分散化を目的としたキャンペーンの一環として、**純金フロッピーディスク**（10,000 ドル以上の価値）をプレゼントしています。

これは、ネットワークの拡張を支援し、一点物のコレクターズ賞品を獲得する稀な機会です。

**参加方法**

- AO 上で HyperBEAM ノードを立ち上げる（既存のノードも対象）
- [HyperBEAM Discord](https://discord.gg/nYbkajGd)の**gold-standard-nodes**チャンネルであなたのノードのパブリック IP を提出
- **4 月 4 日午前 0 時 EST**までに検証を完了

勝者は**ランダムに**選出され、公的に証明が投稿されます。

**締切：** 4 月 4 日午前 0 時 EST

<div class="tweet-container">
  <a href="https://x.com/aoTheComputer/status/1904613675652309138/video/1">
    <img src="/static/images/gold-tweet.png" alt="AO Gold Node Giveaway">
  </a>
</div>

## HyperBEAM とは何か？

HyperBeam は、AO の分散オペレーティングシステムのノードソフトウェアとして機能する AO-Core プロトコルのクライアント実装です。ハードウェアの詳細を抽象化し、プログラムがネットワーク全体でシームレスに実行できるようにします。

HyperBEAM の中核には以下が含まれます：

- NodeJS で構築された**Compute Unit（CU）**で、WASM 実行と AO ステート管理を担当
- プライベートで検証可能な計算のための**TEE（Trusted Execution Environment）**サポート
- スタック内の機能を表す AO **Device**のプラグアンドプレイシステム

**Device の成熟度レベル：** HyperBEAM は現在、3 つの階層に分類された約 25 のコア Device を搭載しています：

- **Candidate（緑）：** 安定で本番対応
- **Preview（オレンジ）：** 使用可能だが、重要なワークロードに対してはまだ堅牢化されていない
- **Early Access：** 実験的で変更の可能性あり

[最新の HyperBEAM アップデートについて詳しく学ぶ](article/hyperbeam-milestone-3.md)。

## AO-Core とは何か？

AO-Core は AO 上で分散計算を支えるプロトコルです。従来のブロックチェーン VM とは異なり、統一環境で複数の実行モデルをサポートするよう設計されています。

コアコンセプト：

- Hashpath – プログラムの入力と初期ステートを検証するための Merkle 様参照
- 統一ステート表現 – AO Process ステートは HTTP 互換ドキュメントとして保存
- Attestation – ノードは他のノードの出力を検証または異議申し立て可能で、暗号的・経済的信頼を構築
- Meta-VM – 単一の検証フレームワーク下で多様な計算モデル（WASM、AI エージェント、LLM）をサポート

## なぜノードを実行するのか？

![HyperBEAM UI](/static/images/hyperbeam-ui.png)

HyperBEAM は現在プレビュー段階にあり、ほぼ機能完成で、アクティブな開発と新機能が毎週追加されています。

最近のアップデートには以下が含まれます：

- Legacynet SU 互換性（Milestone 3）
- 統一された Sybil 耐性ネットワークとして機能する TEE ベースノード
- スケジューラリクエストのキャッシング。アプリが以前の結果を再利用し、レイテンシを削減可能
- Web アプリの改良されたエラーハンドリング。開発者のデバッグを容易に
- より柔軟で安全なノード間通信のための拡張 HTTP 署名サポート

AO はホログラフィックステートモデルを使用するため—すべての Process が[Arweave](reference/arweave.md)上に永続的に存在—テストネットとメインネット間にハードカットオフはありません。ネットワークは段階的に進化します。

現在ノードを実行することは、AO のアーキテクチャへの早期アクセス、モジュラーコンピュートでの実践経験、legacynet からメインネットへの移行をサポートする役割を意味します。

**また：純金フロッピーディスクについてお話ししましたっけ？**

## 始めてみよう

ノードを立ち上げ、4 月 4 日までに検証し、分散コンピュートの未来に参加しましょう。

- [HyperBEAM Discord に参加](https://discord.gg/AU2XCabRpb)
- [HyperBEAM ドキュメントを読む](https://permaweb.github.io/HyperBEAM/)
- [HyperBEAM リポジトリをチェック](https://github.com/permaweb/HyperBEAM)

## Further reading

- [AO 101](reference/ao.md)
- [AO mainnet is live](ao-mainnet-live.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)

## Resources

**AO**

- [Website](https://ao.arweave.net/)
- [X](https://x.com/aoTheComputer)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
