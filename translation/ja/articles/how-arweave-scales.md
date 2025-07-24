---
title: Arweaveのスケール方法（そしてそれがAOにとって重要な理由）
description: Arweaveがスケールで永続的ストレージを実現する方法。
permalink:
tags:
---

![Permaweb Header](/static/images/arweave-scales-header.png)

## I. はじめに

Arweave は、ブロックチェーン、オラクル、そして今やコンピュートという複数の領域にわたって分散インフラのバックボーンになりつつあります。スケーラブルな経済、再帰的バンドリング、ホログラフィックデータモデルの組み合わせにより、Arweave は効率的であるだけでなく、ますますデフレ的になっています。この投稿では、なぜ Arweave がスケールするのか、経済的にどのように自立しているのか、そしてそれが AO とより広い Permaweb の成長にとって何を意味するのかについて、より深い技術的観点から見ていきます。

## II. 一度支払い、永続的に保存

Arweave は、一つの重要な点でコントラクトベースのストレージネットワークと異なります：すべてのトランザクションに対して**単一のグローバルルール**を強制します：一度支払い、永続的に保存。この設計により、トランザクションごとの裁定の必要性が排除されます。

コントラクトベースのプラットフォームでは、各ストレージリクエストは期間（例：1 年、3 年）、レプリカ数、特定の利用規約を指定する必要があります。これは複雑さと計算オーバーヘッドを導入します。コントラクト数が増加するにつれて、ネットワークの負担も増加します。

対照的に、Arweave のグローバルデータセットは、単一の Merkle tree に整理された 256KB チャンクで構成される**不変データレイク**としてモデル化されています。誰が提出したかやコンテンツに関係なく、すべてのアップロードが均一に扱われます。これにより、スマートコントラクトレベルのロジックを必要とせずに、miners 向けの効率的なインデックス作成、取得、Proof-of-storage バリデーションが可能になります。

データを永続的に保存するためのリアルタイム概算コストについては、[Arweave Fees Calculator](https://ar-fees.arweave.net/)をご覧ください：

![AR Fees](/static/images/ar-fees.png)

**ArFleet：Permaweb 上での一時的ストレージ**

エコシステムは、ユーザーが長期保存と時間制限ストレージオプションの間で選択できる ArFleet を通じて一時的ストレージもサポートしています。これにより、分散データ管理に柔軟性が追加されます。

ArFleet は[こちら](https://arfleet.arweave.net/)をチェックしてください。

## III. バンドルアップロード

Arweave ブロックは約 2 分間に最大 1,000 トランザクションをサポートします。表面的には、これはスケーラビリティのボトルネックのように聞こえますが、そうではありません。

Arweave は[ANS-104](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md)標準による**再帰的トランザクションバンドリング**をサポートします：

- 単一の Arweave トランザクション（バンドル）は**数百万のサブトランザクション**を含むことができます
- バンドルは任意の深度まで**ネスト**できます
- 各バンドルは**単一の支払いで決済**され、オンチェーンで一つのトランザクションとして表示されます

バンドルされたデータのおかげで、Arweave は手数料マーケットの必要なしにスケールします。

[AR.IO によって作成された Turbo でのバンドルアップロードについて詳しく学ぶ](https://docs.ardrive.io/docs/turbo/what-is-turbo.html)。

<div class="tweet-container">
  <img src="https://ywf3l7fxjxdjsdyrpm3i773v44vpapkhrlel2n2323n5myhicqsa.arweave.net/xYu1_LdNxpkPEXs2j_915yrwPUeKyL03W9bb1mDoFCQ" alt="Tweet screenshot"></div>
  
## IV. 経済的持続可能性

Arweave は、200 年以上の将来のストレージに資金を提供するために新しい経済構造を使用します。各データアップロードは一度限りの手数料を支払い、以下のように分割されます：

- 一部は即座に miners に支払われます
- 残りは**Storage Endowment**に入り、継続的なデータ可用性のために時間をかけて miners に支払います

これにより以下が保証されます：

- Miners はデータを保存するために継続的にインセンティブを得る
- アップロードされたデータは支払われた後も長期間アクセス可能のまま
- ネットワークは期限切れのストレージ条件やサブスクリプションを避ける

<div class="tweet-container">
  <a href="https://x.com/allquantor/status/1901747821277044951">
    <img src="/static/images/fees-tweet.png" alt="Arweave Fees">
  </a>
</div>

Arweave のトランザクション手数料は偽造が困難です。水増しされたボリュームや TPS メトリクスとは異なり、手数料は実際の支払いを表します。それらは使用量の最も正直なシグナルです。そして、すべての手数料の 99%以上が endowment に行くため、それらは効果的に流通から除去され、AR を構造的にデフレ的にします。

[Arweave の endowment について詳しく学ぶ](storage-endowment-explained.md)。

## V. 他のチェーンとプロトコルとの統合

Arweave は多くの Layer 1 の**データレイヤー**になりつつあります：

- Celestia、dYdX、Moonbeam、Noble は Arweave を使用してチェーン履歴を保存
- Ethereum と Solana ブロックは KYVE や他のインデクサーを介してアーカイブされます
- RedStone などの Oracle は 1 日に数千万の価格更新を Arweave に投稿

以下は、ARIO を使用して Arweave にデータをバンドルする[KYVE ストレージプール](https://app.kyve.network/#/pools)のスクリーンショットです：
![Kyve storage pools](/static/images/kyve.png)

これが可能な理由：

- Arweave は**低コストの永続的ストレージ**を提供
- アップロードは[AR.IO](https://x.com/ar_io_network)を介して**法定通貨や他の暗号通貨**で支払い可能
- Gateways とバンドラーはデータ Read/write 用の堅牢な API を提供

Arweave は高スループットエコシステムのニーズを満たすために**技術的にも経済的にも**スケールします。

## VI. Arweave が AO のホログラフィックステートを作成する方法

AO 上のすべての Message と Process は Arweave 上に永続的に保存されます。これにより、AO が**ホログラフィックステート**と呼ぶものが可能になります。

**ホログラフィックステートとは何か？**

グローバルステートでコンセンサスに達する代わりに、AO は Message とステート変遷の永続的ログを Arweave 上に保存します。これらのログは**ステートのホログラム**を形成し、誰でも履歴の任意の点からステート出力を再計算できます。

- 決定論性と監査可能性を保証
- AO Process がタイムドまたは暗示的 Message に反応することを可能に
- 共有グローバル実行への依存を除去

このモデルは、**legacynet Process が HyperBEAM に摩擦なく移行**できるものです。彼らは既に Arweave に保存されており、今や高速で分散化されたメインネットコンピュートにアクセスできます。

[最新の HyperBEAM アップデートについて詳しく学ぶ](hyperbeam-milestone-3.md)。

## VII. Arweave と AO：同じコインの両面

Arweave と AO は技術的にも経済的にも関連しています：

- **Arweave は**高いトランザクションボリュームと持続的な miner インセンティブから利益を得る
- **AO は**永続的でスケーラブルなストレージレイヤーと成熟したデータインフラから利益を得る

これにより以下が作成されます：

- より多くの AR が endowment にロックされることによる**デフレトークノミクス**
- 投機ではなく実際の使用に基づく**持続可能なインフラ**
- 単一モデル下で統一された**合成可能なコンピュート+ストレージ**

Ethereum の L2 がベースレイヤーから価値を吸い上げる一方、AO は**すべての活動を Arweave に固定**し、ネットワーク使用量と経済スループットを直接増加させます。

先月、AO はすべての Arweave トランザクションの**3 分の 1**を占めました：

![Arweave uploads](/static/images/arweave-tx.png)

**Permaweb Index（PI）**

Arweave と AO がどのように経済的にリンクされているかについてのより深い洞察については、アクティブ管理を必要とせずにエコシステム全体への幅広いエクスポージャーを提供する金融インデックスである Permaweb Index（PI）をチェックしてください（33.3% AR、33.3% AO、33.3% フェアローンチプロジェクト）。

[PI について詳しく学ぶ](permaweb-index.md)。

## VIII. 結論

Arweave は永続性をプリミティブにすることで分散ストレージを解決します。そのアーキテクチャは手数料マーケットを排除し、グローバルステートを統一されたデータレイクに圧縮し、再帰的バンドリングを通じて無限のスケーラビリティを解放します。新しいトランザクションごとに、その endowment モデルは AR をさらに流通から押し出し、投機ではなく実際の需要に結びついたデフレフィードバックループを作成します。

AO はこの基盤の上に分散コンピュートを導入することで構築されます。すべての AO Message、ステート変遷、Process は Arweave 上に永続的に存在します。計算は検証可能であるだけでなく、コンセンサスをトレーサブルな Message ログとハッシュリンクされた証明に置き換えるホログラフィックステートモデルのおかげで再現可能です。結果として、グローバルボトルネックのないスーパーコンピュータが生まれ、設計によりスケーラブル、自律的、パーミッションレスです。

**Arweave は永続的ハードドライブです。AO は永続的 CPU です。一緒に彼らは Permaweb を構成します。**

## Further reading

- [Arweave](reference/arweave.md)
- [Storage endowment](storage-endowment-explained.md)

## Resources

- https://viewblock.io/arweave
- https://stats.dataos.so/arweave
- https://arwiki.arweave.net/#/en/How-Arweave-Scales

---

これは財務アドバイスではありません。ご自身で調査を行ってください。
