---
title: "AO legacynetからメインネットへの移行の説明"
description: この投稿では、legacynetからメインネットへの移行がなぜ重要なのか、HyperBEAMの現在の状態、そして開発者とユーザーがどのように準備できるかを説明します。
permalink: /article/legacynet-mainnet-transition.html
tags:
---

![Permaweb Header](/static/images/mainnet-transition.png)

## I. はじめに

最近の[HyperBEAM Milestone 3](https://x.com/samecwilliams/status/1903537896516194523) PR は、legacynet Process が HyperBEAM 上で実行できるようにすることで legacynet からメインネットへの移行を可能にする重要な技術アップデートを示しています。legacynet とメインネットの両方のデータは Arweave 上に保存されるため、両ネットワークは同じデータを実行できます。このシフトは、AO のスケーラビリティと効率性を大幅に向上させます。この投稿では、移行がなぜ重要なのか、HyperBEAM の現在の状態、そして開発者とユーザーがどのように準備できるかを説明します。

## II. HyperBEAM に移行する時が来た理由

現在、エコシステム内のほとんどのアプリは、アクセシビリティと高いレート制限のために無料コンピュートクラスターに依存しています。しかし、この中央集権的依存はボトルネックを作成します。無料クラスターが圧倒されると、ユーザーは AO が「ダウン」していると認識するかもしれませんが、実際にはノードの一部のサブセットでリソースが制限されているだけです。ユーザーはこれらの問題を避けるために常に独自の AO ノードを実行できます。

エコシステムの主要インフラプロバイダーである ARIO は、その Process へのトラフィックをサポートするために legacynet 上で独自の compute unit（CU）を実行することで、このアプローチを取っています。ARIO エンジニアの DTF は[このスレッド](https://x.com/iamdtfiedler/status/1889045690866872762)でこれを詳しく説明しています。

HyperBEAM Milestone 3 により、開発者は現在、legacynet Process を HyperBEAM に接続し、メインネットコンピュートにアクセスできるようになり、エコシステムチームが提供する少数の無料コンピュートノードに依存しない真に分散化されスケーラブルな代替手段を提供します。

## III. HyperBEAM の現在の状態

Milestone 3 は機能完成していますが、まだ最適化が必要です。**プレビューステータス**は、いくつかの改良が必要ですが、ライブで価値に敏感でないステージング環境でのデプロイメント準備ができていることを意味します。

この[HyperBEAM](https://github.com/permaweb/HyperBEAM)バージョンは、開発者が legacynet スケジュールされた Process にデータを書き込み、その出力を計算することを可能にします。しかし、さらなるテストと検証が完了するまでは、**100%の精度**にはまだ依存すべきではありません。

**マイルストーン 3 の主なハイライト：**

- **Scheduler 互換性:** ~scheduler@1.0を介した AO legacynet scheduler への GET と POST リクエストで、HyperBEAM 上でのシームレスな実行を可能に。
- **TEE ベースコンピュート:** ~green-zone@1.0は安全で分散化された計算のための**trusted execution environment（TEE）**をサポート。
- **最適化されたパフォーマンス:** よりスムーズな処理のための拡張**Message encoding 効率**と**ANS-104 タグ正規化**。
- **JSON と Arweave 統合:** AO-Core Message は**特定のコーデックでリクエスト**可能で、HyperBEAM ノードは**Arweave データをブラウザに直接提供**できます。

## IV. AO の主要マイルストーン

AO-Core はモジュール性を念頭に置いて設計されています。様々なコンピューティングタスクのために異なる「Device」をプラグインできる分散スーパーコンピュータと考えてください。これにより、ノードオペレーターはユーザーに提供するサービスに柔軟性を与えます。HyperBEAM の開発は主要なマイルストーンで行われています：

- **マイルストーン 1:** 2 月 8 日に開始、有料コンピュートサービスをサポートする AO-Core を導入。
- **マイルストーン 2:** Scheduler、メッセージングシステム、コンピュートエンジン、TEE（Trusted Execution Environment）サポートを含むネイティブ実行 Device を追加。
- **マイルストーン 3:** HyperBEAM ノードを既存の Legacynet Process と完全に互換性を持たせ、無料コンピュートノードから分散化されスケーラブルなネットワークへのスムーズな移行を可能に。

[AO リリース用語についてはこちらで詳しく学んでください](article/ao-nomenclature.md)。

## V. 開発者の準備方法

前述のように、Milestone 3 は機能完成していますが、まだ最適化が必要です。開発者は legacynet スケジュールされた Process へのデータ書き込みと HyperBEAM 上での出力計算を開始できます。

開始するために、開発者は HyperBEAM ノードを立ち上げることができます。詳細は[HyperBEAM GitHub ドキュメント](https://github.com/permaweb/HyperBEAM)にあります。

- [HyperBEAM ノードオペレーター Discord にここで参加](https://discord.com/invite/nYbkajGd)

アプリ開発者は AOS を通じて AO-Core で支払いを処理できます。詳細は[AO Cookbook ガイド](https://cookbook_ao.arweave.net/mainnet/ao-core-relay.html)にあります。

- [メイン AO Discord にここで参加](https://discord.gg/dYXtHwc9dc)

## VI. ユーザーの準備方法

Permaweb アプリケーションは間もなく HyperBEAM への移行を開始します。最も深刻な Legacynet トラフィックボトルネックを経験している[Botega](https://x.com/Botega_AF)と[Permaswap](https://x.com/Permaswap)などの DeFi プラットフォームは、可能な限り早期の HyperBEAM 統合を優先しています。移行進捗のアップデートについては彼らの発表をフォローしてください。

より広範なエコシステムアップデートについては、最良のソースは公式[AO account on X](https://x.com/aoTheComputer)と[Sam の X](https://x.com/samecwilliams)アカウントです。チームはこの移行をシームレスにするために積極的に取り組んでいるので、さらなる発展に注目し、ハイパー並列コンピュータの次のイテレーションをテストする準備をしてください。

私たちの Permaweb [Explore](explore.md)で完全なエコシステムをご覧ください。

## VII. 結論

AO は HyperBEAM でより分散化された未来に向かっています。無料コンピュートは素晴らしいオンランプでしたが、メインネットへの移行は持続可能な成長と安定性を確保します。ユーザーはアプリケーションをテストし、公式アップデートに情報を保ちながら準備を始めるべきです。

AO は他のブロックチェーンとは異なります。分散コンピュートへの新しいアプローチを提示し、現在コア機能を正しく行うことは重要で、システムが完全に配置された後に基本的な問題を修正しようとするよりもはるかに良いのです。

## Further reading

- [Legacynet SU compatibility](hyperbeam-milestone-3.md)
- [AO mainnet is live](ao-mainnet-live.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)

## Resources

**AO**

- [Website](https://ao.arweave.net/)
- [X](https://x.com/aoTheComputer)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
