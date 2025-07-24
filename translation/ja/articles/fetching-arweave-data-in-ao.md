---
title: AO ProcessがassignmentでArweaveデータを取得する方法
description:
permalink:
tags:
---

![AO Process Header](/static/images/process-fetch.png)

## I. はじめに

従来の Web は一時的です。API がダウンし、リンクが腐り、コンピュートはメモリから切り離されています。AO と Arweave はこれに対する解決策を提供します。

AO は従来のレイヤー 2 ではありません。それはすべての Message と Process を保存するために Arweave を使用する独自のネットワークです。この永続的データレイヤーが AO にホログラフィックステートを与えます。Arweave は AO の分散 CPU に対する永続的ハードドライブです—一緒に、彼らは Permaweb を構成します。

開発者として、Arweave からデータにアクセスしたい場合があります。この投稿では、その方法を説明します。

**assignable**、**assignment**、**handler**を使用して 2 つをブリッジし、AO Process が Permaweb からデータを取得し処理できるようにする方法を説明します。完全な技術ドキュメントについては、AO Cookbook の[Accessing Arweave Data](https://cookbook_ao.arweave.net/references/data.html)ページをご覧ください。

## II. AO Process とは何か？

![AO Header](/static/images/ao-ar.png)

AO の中心にあるのは[Process](https://cookbook_ao.arweave.net/concepts/processes.html)です：スマートコントラクトの開発者には馴染みがあるが、根本的に異なる方法で動作する生きた、Message passing コンピュートユニットです。

Ethereum では、スマートコントラクトはトランザクションに反応する静的なコードです。EVM のルールに拘束されて決定論的に実行され、明示的なストレージを通じて以外は呼び出し間でステートを永続化しません。

AO では、Process はより永続的なアクターのようなものです。以下ができます：

- 内部ステートを維持
- 受信 Message を聞いて反応
- 他の Process に独自の Message を送信
- モジュールから新しい Process を動的に生成

スマートコントラクトが受動的—外部トランザクションによってのみトリガー—である一方、Process は計算ネットワークの能動的な参加者です。ブロックチェーンスクリプティングというよりも並行プログラミングに似た方法で、Message を発行、受信、応答できます。

これは、AO のホログラフィックステートモデルによって可能になります：Message passing を通じてネットワークによって維持されるグローバルで分散化されたステートです。各 Process は、イベントに反応し副作用を生成することでこのステートに貢献します。

## III. assignable の動作

AO Process は常に聞いているため、何を聞くべきかを定義する方法が必要です—特に Arweave トランザクションなどの外部データを扱う際に。

ここで assignable が登場します。

Assignable は、Process の権限レイヤーとして機能します。以下を宣言します：

- Process が受け入れる Arweave トランザクションのタイプ
- それらのトランザクションがどのようにフィルタリングまたはタグ付けされるべきか
- Process が反応する意志があるデータ

assignable なしに、Process は割り当てられたトランザクションを拒否します—データが有効であっても。これはセキュリティと設計機能です：AO は、明示的にオプトインしない限り、Process が Arweave から任意のデータを引き込むことを許可しません。

これは典型的な「fetch」モデルを逆転させます。web2 のようにアドホックでデータを問い合わせるのではありません。代わりに、特定の種類の永続的データを受け入れるよう Process を設定し、ネットワークがそれを配信するのを待ちます。

### ステップ 1：何を受け入れるかを定義

何かを取得する前に、assignable を定義する必要があります。これらは、Process が受信を許可される Arweave トランザクションの種類を伝えるフィルターです。

```lua
-- ArDriveからのトランザクションを許可
ao.addAssignable("allowArDrive", function (msg)
  return msg.Tags["App-Name"] == "ArDrive-App"
end)

-- 特定のコンテンツタイプを許可
ao.addAssignable("allowImages", function (msg)
  return msg.Tags["Content-Type"] and string.match(msg.Tags["Content-Type"], "^image/")
end)
```

これをファイアウォールと考えてください。あなたが定義しない限り、何も通過しません。このステップをスキップしてトランザクションを取得しようとすると、**永続的にブラックリストに登録**されます。

### ステップ 2：データをリクエスト

assignable が設定されたら、`Assign()`を使用して特定の Arweave トランザクションを ID で要求します。

```lua
Assign({
  Processes = { ao.id },
  Message = 'your-arweave-tx-id'
})
```

これはネットワークに告知します：このトランザクションの内容をあなたの Process に送信してください—ただし、定義したルールに一致する場合のみ。

### ステップ 3：データを処理

データが到着したら、同期的に処理できます：

```lua
msg = Receive(function (msg)
  return msg.Tags["App-Name"] == "ArDrive-App"
end)
```

または永続的 handler を使用して非同期的に：

```lua
Handlers.add("ArDriveHandler", { Tags = { ["App-Name"] = "ArDrive-App" } }, function (msg)
  print(msg.Data)
end)
```

これにより、AO Process が反応的になります。ポーリングや手動介入なしに、トランザクションが到着すると「目覚める」ことができます。

## IV. これが可能にすること

![Permaweb](/static/images/permaweb.png)

これは API からファイルを取得する以上のものです。アーカイブ、オラクル、他のブロックチェーンなどの多様なリソースからアップロードされた 140 億を超えるデータを含む Arweave ネットワークへの開発者アクセスを提供します。いくつかの例：

- **動的設定読み込み**: ロジック、モジュール、またはウェイトを Arweave に保存。AO Process を再デプロイせずに更新。
- **軽量エージェント**: コンピュートを小さく、ステートレスに保ち、必要な時のみデータを引き込む。
- **ガバナンス対応ロジック**: 投票結果や Token snapshot を取得してオンチェーン行動に通知。
- **合成可能バックエンド**: Arweave を公的 Message バスとして扱う。任意のプロトコルの任意のトランザクションを取得し反応。

このパターンにより、ステートが永続的に生きるが、コンピュートは機敏に留まる分散システムを構築できます。

## V. これが web2 API と異なる理由

従来の開発では、API は単一障害点を導入します。以下のことが可能です：

- 警告なしにオフラインになる
- レスポンスを変更したり互換性を破る
- 中央集権的インフラへの信頼を要求
- データのソースと履歴を隠蔽

AO + Arweave では、データは永続的で検証可能で、ネットワークの構造に組み込まれています。

典型的な fetch 呼び出しとこのモデルを根本的に異ならせるものは以下です：

| 従来の fetch（web2）           | AO + Arweave assignment                      |
| ------------------------------ | -------------------------------------------- |
| API からデータをリクエスト     | 永続的トランザクションからデータをリクエスト |
| レスポンスは変更または消失可能 | レスポンスは不変で検証可能                   |
| サーバーを信頼                 | ハッシュを信頼                               |
| 一時的                         | 永続的                                       |
| 誰が何を得るかのプロトコルなし | 明示的権限モデル（assignable）               |

これは、より速い呼び出しやより安いストレージについてではありません。これは**異なる信頼モデル**です。

並列処理により取得が速く、開発者がデータの出所を確保できるため信頼できます。サーバーに応答を求めるのではなく、代わりに Permaweb に、Process が既に受け入れると宣言したデータを配信するよう指示しています。

## 結論

ほとんどのソフトウェアはポーリング、プル、リフレッシュします。AO は聞きます。

API やデータベースからではなく、Permaweb から真実が到着するのを待ちます。もはや信頼できない第三者からデータを取得していません。永続的データ上で直接計算しています。

Arweave トランザクションを AO Process に割り当てる能力は、分散バックエンド、エージェント駆動システム、そして文脈を失うことなく永続的に進化できるアプリケーションの重要な構成要素です。

AO コミュニティとつながるには、[AO Discord](https://discord.gg/dYXtHwc9dc)に参加し、[AO the Computer on X](http://x.com/aoTheComputer)をフォローして最新のアップデートを入手してください。

## Further reading

- [Arweave](reference/arweave.md)
- [AO Permaweb Guide](ao-permaweb-guide.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [AO message passing explained](ao-message-passing-explained.md)

## Resources

- [AO Cookbook](https://cookbook_ao.arweave.net/)
