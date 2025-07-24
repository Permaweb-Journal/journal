---
title: AOのMessage passing解説
description: AO Message passingの初心者向けガイド。
permalink: /article/ao-message-passing-explained.html
tags:
---

![AO-Core Stack](/static/images/ao-message-passing-header.webp)
AO アプリケーションを探求している方は、「Message」という用語に遭遇したことがあるでしょう。特に[ao.link](https://www.ao.link/#/)でトランザクションを確認している際にです。ao.link で Message を詳しく調べることは、単にトランザクションが通ったことを確認しようとしているだけでも、圧倒的に感じられることがあります。

このガイドでは、AO 上の Message が他のブロックチェーンとどう異なるのか、そして AO の並列実行への独特なアプローチがどのように比類のないスケーラビリティと効率性を解放するのかを説明します。

## 共有メモリとは何か？

多くのブロックチェーンは[shared memory](https://en.wikipedia.org/wiki/Shared_memory)を使用し、すべてのスマートコントラクトが同じメモリ空間にアクセスします。この設計により、コントラクトは直接データを読み書きでき、特定の操作がより簡単になります。しかし、重要な制限が導入されます：[lock contention](<https://en.wikipedia.org/wiki/Lock_(computer_science)>)です。

Lock contention は、複数のユーザーが同時に同じデータにアクセスし、変更しようとする際に発生します。競合を避けるため、Process は順番に処理する必要があります。例えば：

- Alice がデータをロックし、変更を加え、ロックを解除します。
- その後でのみ、Bob がデータにアクセスして Modify できます。

このシステムは小規模では機能しますが、ネットワーク使用量が増加するとボトルネックになります。

![post image](/static/images/lock-contention.webp)

Lock contention を示すシンプルな図。[このブログ](https://www.geeksforgeeks.org/types-of-locks-in-concurrency-control/)から引用。

## AO の Message passing はどう機能するか？

AO は根本的に異なるアプローチを使用します。共有メモリに依存する代わりに、AO 上のスマートコントラクトは独立した非同期[Process](https://cookbook_ao.g8way.io/concepts/processes.html)として動作します。

- 各コントラクトは独立して実行され、[Message](https://cookbook_ao.g8way.io/concepts/messages.html)を送信することで他と通信します。
- これらの Message は[Arweave](https://arwiki.arweave.net/#/en/main)上に永続的かつ検証可能に保存され、セキュリティと透明性を確保します。

この設計により、Process がアクセスを競合するグローバルメモリ空間の必要性が除去され、lock contention が効果的に排除されます。

このシステムを視覚化するために、以下の図は**[unit](https://cookbook_ao.g8way.io/concepts/units.html)**を通じてネットワーク上で Message がどのように流れるかを示しています。

![post image](/static/images/message-passing.webp)

AO の Message passing を示す図。[AO cookbook](https://cookbook_ao.g8way.io/concepts/how-it-works.html)から引用。

これらの unit は AO の基盤を形成し、集合的に AO Operating System（aos）を動作させます。技術的な側面に深く入り込まずに、3 つの unit type の概要を示します：

- **Messager Unit (MU):** エントリーポイントとして機能し、外部 Message を受信し、Process 間の通信を管理し、Message を Scheduler Unit（SU）に転送します。
- **Scheduler Unit (SU):** Message が適切にシーケンスされ、一貫した再生と検証のために Arweave に保存されることを保証します。
- **Compute Unit (CU):** 計算を実行し、メモリを管理し、さらなる処理のために MU に結果を返すという重い作業を処理します。

これらの unit は、ネットワーク全体に複数存在でき、連携して aos を効率的かつ安全に実行します。

## AO Process のスケール方法

各 AO Process は単一の CPU スレッドの速度で動作します。Process が忙しくなりすぎた場合、ワークロードを処理するために複数の Process に分割でき、これは[horizontal scaling](https://en.wikipedia.org/wiki/Scalability#Horizontal_or_scale_out)と呼ばれる方法です。

例えば、Bazar に精通しているユーザーは、それが Universal Content Marketplace（[UCM](https://bazar.arweave.net/#/docs/overview/introduction)）プロトコル上で実行されることを知っています。AO テストネット中、UCM Process は高いトラフィックを経験し、時々パフォーマンスが低下しました。これを解決するため、UCM はサブオーダーブックに水平スケールされており、販売用にリストされたすべてのアトミックアセットが独自の UCM Process を持つことになります。

このスケーラビリティにより、AO は速度を落とすことなく増加したトラフィックと複雑さを処理できます。

## トレードオフ

Message passing の主なトレードオフは、共有グローバルメモリへの瞬時アクセスがないことです。代わりに、Process は他の Process から Message を送受信することで情報を「要求」する必要があります。

これにより追加の複雑さが導入されますが、AO 開発者はこれらの相互作用を効率的でシームレスにするために懸命に働いています。AO テストネット段階での主要な焦点は、インフラと開発者体験の改善でした。これらの進歩により、コンシューマーアプリ開発者がアプリケーションのユーザー体験を向上させることができました。急速に成長する Permaweb エコシステムは[こちら](https://list.weavescan.com/map)で探索できます。

Bazar やその他のユーザー向けアプリケーションの開発を続ける中で、可能な限りシームレスなユーザー体験の作成を目指しています。これには、ユーザーが不必要な摩擦なしにプラットフォームを楽しめるよう「配線を隠す」ことが含まれます。

## 結論

AO の Message passing アプローチは、shared memory システムのボトルネックを排除します。単一の実行スレッドへのアクセスを競合する代わりに、Process は非同期で並行して通信します。

これがすべて複雑に聞こえるなら、あなたは一人ではありません。率直に言って、これらはシステムが機能し分散化を維持する限り、ほとんどのユーザーが気にしない技術的複雑さです。だからこそ、複雑さを抽象化し続け、ユーザーフレンドリーでありながら分散化を妥協しないプラットフォームを構築することが不可欠です。

この投稿は、Arweave/AO の創設者である Sam Williams の[ツイート](https://x.com/samecwilliams/status/1784008697351471154)からインスパイアされました。

---

これは財務アドバイスではありません。ご自身で調査を行ってください。

オリジナル投稿：https://paragraph.xyz/@afmedia/how-message-passing-works-on-ao
