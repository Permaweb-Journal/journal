---
title: Micro-OrderbookとHyperBEAMでBazarをスケール
description: Bazarがmicro-orderbook、HyperBEAM統合、モジュラーアーキテクチャでPermawebの分散メディアエコシステムを強化するためにどのようにスケールしているかを探る。
permalink:
tags:
---

![Bazar HyperBEAM Header](/static/images/bazar-hb-header.png)

## I. はじめに

[Bazar](https://bazar.arweave.net/)は、Permaweb の急速に進歩するインフラとともに進化しています。[HyperBEAM Milestone 3](hyperbeam-milestone-3-beta.md)の開始により、legacynet Process は HyperBEAM とより効率的に通信できるようになりました。

過去数ヶ月間、チームは単一のグローバルオーダーブックをモジュラーでアクター指向のシステムに置き換えることで、Bazar のバックエンドを静かに再設計しました。HyperBEAM は、Process ステートをより効率的に読み取るために統合されました。このアップグレードにより、成長する Decentralized Media Ecosystem をサポートするために、より大きなスケーラビリティと回復力が解放されます。

Arweave Day Berlin からの Bazar 完全プレゼンテーションは[こちら](https://x.com/OurBazAR/status/1934728336485261678)をご覧ください。

## II. なぜグローバルオーダーブックはスケールしなかったのか

![Bazar Global Orderbook](/static/images/global-orderbook.png)

Bazar の元のバージョンでは、単一の AO Process がすべてのアセットのすべてのオーダーを処理していました。Universal Content Marketplace（UCM）オーダーブックは一つの Process に中央集権化されていました。

これにより以下が発生しました：

- 大量コレクションでのボトルネック
- 単一障害点
- CPU バウンドによる速度低下

すべてのアセットは、どんなに小さくても、同じコンピュートレーンにキューイングする必要がありました。その単一 Process が失敗すれば、マーケットプレイス全体が停止しました。

## III. 解決策：Micro-orderbook

![Bazar Micro-orderbook](/static/images/micro-orderbook.png)

これらの制限に対処するため、Micro-orderbook を導入しました。これらは各アセットのオーダーブックと活動追跡のための独立した AO Process です。

現在、アトミックアセットが販売にリストされると、独自の隔離された Process を生成します。これにより以下が可能になります：

- 完全に非同期の操作
- アセットごとの同期性
- ノード間での水平スケーリング
- クリーンな障害隔離

## IV. なぜアプリレベルでアクター指向アプローチを使うのか

AO のアクター指向モデルをアプリケーション層で適用することで、Bazar は Permaweb の収益化レイヤーをスケールする位置に置かれています。

AO は分散コンピュートへの根本的に異なるアプローチを提供します。この設計パターンをアプリケーション開発に持ち込むことで、モジュール性、信頼性、パフォーマンスが解放されます。

HyperBEAM Milestone 3 の開始により、Bazar はコア Process からドライランも除去しました。ステート読み取りは現在、HyperBEAM を介して HTTP 上で直接行われ、コンピュートオーバーヘッドを削減し、アーキテクチャを簡素化します。以下は主要な Process とそれらのステートを取得するために使用されるエンドポイントです：

![Bazar HyperBEAM Header](/static/images/bazar-hb.png)

## V. ARNS 統合と開発者ツール

アーキテクチャの改善を超えて、フロントエンドの更新が開発中です。以下を含みます：

- ARNS 名の取引サポート
- プライマリ名サポート付き AO Profile
- Permaweb-libs での拡張開発者ツール

これらのアップグレードにより、Bazar は Permaweb プロファイルと命名システム全体でより合成可能になります。Permaweb-libs は、Profile、Atomic Asset、Collection、Comment、Zone などのフィーチャーをアプリに統合しようとするビルダーにツールを提供します。

SDK は[こちら](https://github.com/permaweb/permaweb-libs)をご覧ください。

## VI. なぜ Bazar が Permaweb にとって重要なのか

![Bazar HyperBEAM Header](/static/images/dme.png)

一部の人は疑問に思うかもしれません：なぜ別の NFT マーケットプレイスが必要なのか？

Bazar はただの NFT マーケットプレイスではありません。それは、Permaweb 上で出現している新しい Decentralized Media Ecosystem（DME）の経済レイヤーです。[Odysee](https://x.com/OdyseeTeam)や[Portal](https://x.com/PortalInto)などのプラットフォームは、共有メディアグラフのユーザーインターフェースとして機能することで、このビジョンの実証を開始しています。

Arweave と AO 上に構築されたこれらのアプリは、同じ基盤データを使用しますが、異なるインターフェースを通じて提示します。このアプローチは、コールドスタートやデータサイロなしに相互接続されたエコシステムを作成します。

Bazar と UCM プロトコルは、Permaweb 上でメディアをライセンスし取引するための金融インフラを提供します。Bazar はこのプロトコルの最初のユーザーインターフェースの一つかもしれませんが、特定のプラットフォーム、ユースケース、コミュニティに合わせて調整された多くのものが出現することを期待しています。

## VII. 結論

Bazar の旅は、新しい技術環境で実験するクリエイターをサポートしながら、複数のコンピュートシステムとインフラアップグレードを通じて進みました。

レガシーバージョンは、アトミックアセットが Arweave 上で取引できることを証明しました。現在、モジュラーアーキテクチャと HyperBEAM 実装により、Bazar は Permaweb メディアスタックの経済エンジンとして機能する準備ができています。

Permaweb のクリエイター、ビルダー、または好奇心旺盛な探求者であれば、[Bazar Discord](https://discord.gg/vS2fYJNucN)に参加して関与し、コミュニティとつながってください。

## Further reading

- [Permaweb Index](permaweb-index.md)
- [PIXL Token Breakdown](pixl-fair-launch.md)
- [Bazar Community Hub](bazar-community-hub.md)
