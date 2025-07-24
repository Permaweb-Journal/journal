---
title: HyperBEAMがDryRunの必要性を排除
description: HyperBEAMがHTTP経由でProcessステートへの直接的で検証可能なアクセスを可能にすることで、AOでDryRunの必要性をどのように除去するかを学ぶ。Permaweb上での構築へのよりシンプルで高速なパス。
permalink:
tags:
---

![Permaweb Header](/static/images/dryruns-header.png)

## I. はじめに

AO Process は Message で実行されます。残高チェック、転送、新しい Process の生成など、すべての相互作用は[Message passing](ao-message-passing-explained.md)を通じて行われます。従来、開発者が永続的な変更を加えることなく Message を「読み取り」たり現在のステートを取得したりしたい場合、[DryRun](https://cookbook_ao.arweave.net/guides/aoconnect/calling-dryrun.html)を使用していました。

DryRun はメモリ変更を保存せずに Message 呼び出しをシミュレートします。Process ステートを読み取ったり結果をプレビューしたりするのに有用です。しかし、使用量が増加するにつれて、DryRun は特に legacynet 上でボトルネックになりました。ネットワークをスパムし、Compute Unit（CU）を詰まらせ、開発者体験に摩擦を追加しました。

HyperBEAM はこれを変更します。

## II. HyperBEAM とは何か？

[HyperBEAM](https://github.com/permaweb/HyperBEAM)は、Erlang で書かれた[AO-Core](ao-core-deepdive)プロトコルのリファレンスクライアントです。これは AO ネットワークのノードソフトウェアとして機能し、AO Process の分散実行を可能にします。Permaweb のコンピュートエンジンと考えてください。

WebAssembly を隔離して実行するのではなく、HyperBEAM ノードは Message passing を通じて AO Process を実行します。各ノードは Device（~wasm64@1.0、~json-iface@1.0、~stack@1.0など）を登録し、ネットワークからの計算リクエストを処理できます。これらの Device により、ノードはモジュラーで拡張可能な方法で Message を解釈、実行、応答できます。

HyperBEAM は主要な改善を導入します：

- Erlang 同期性による拡張可能な実行
- 効率的な Message 処理のための Lazy evaluation
- trusted compute、WebAssembly、JSON インターフェーシングなどの拡張可能な Device サポート

**開発者にとって最大の勝利の一つ：DryRun の必要性を排除します。**

## III. なぜ DryRun が存在したのか

HyperBEAM 以前、Process 上でステートをチェック（例えば、Token 残高を取得）したい場合は、Message をシミュレートする必要がありました。それが[DryRun](https://cookbook_ao.arweave.net/guides/aoconnect/calling-dryrun.html)でした。

```
const result = await dryrun({
  process: 'PROCESSID',
  tags: [{ name: 'Action', value: 'Balance' }],
  anchor: '1234'
});
```

この呼び出しは[aoconnect SDK](https://cookbook_ao.arweave.net/guides/aoconnect/aoconnect.html)からの dryrun メソッドを使用しました。メモリを更新せずに Message をシミュレートし、開発者が出力をプレビューできるようにしました。

動作しましたが、コストがかかりました。DryRun は legacynet に不必要なトラフィックを追加し、コンピュートノードに圧力をかけ、ネットワークを遅くしました。

## IV. HyperBEAM が DryRun を置き換える方法

HyperBEAM はすべての計算を Message として扱います。Process は PATCH Message を使用してステートを明示的に更新できるため、別の DryRun シミュレーションレイヤーの必要はありません。

シミュレートされた読み取り呼び出しを送信する代わりに、Message を使用して Process のステートの既知の部分を更新します。その後、あなた（または任意のクライアント）は HTTP 経由でその値を直接取得できます。

以下は、更新を聞いてpatch@1.0 Device を使用してステートを書き込む handler の例です：

```
Handlers.add('Update-State', { Action = 'Update-State' }, function(msg)
  if msg.From == ao.env.Process.Tags.AllowedSender then
    Send({ device = 'patch@1.0', cache = msg.Data })
    print('Updated State!')
  end
end)
```

この handler が実行されると、パッチされたステートは任意の HyperBEAM ノードからの直接 HTTP リクエストを通じてアクセス可能になります。例えば：

```
https://tee-1.forward.computer/YOUR_STATE_PROCESS_ID~process@1.0/now/cache
```

これにより、ステートは REST API のように公的にクエリ可能になりますが、暗号的に署名され検証可能です。

## V. 開発者への利益

- **統一された開発者体験:** Message を送信することで Process と相互作用する方法は一つだけです。
- **ネットワーク混雑の軽減:** DryRun は以前ネットワークを氾濫させていました。HyperBEAM はその負荷を除去します。
- **よりシンプルなメンタルモデル:** 特別なフローや例外はありません。すべてがただの Message です。
- **より高速な読み取り:** Process は、特にpatch@1.0とキャッシングと組み合わせることで、効率的にデータを提供できます。

## VI. 結論

DryRun は legacynet 上での必要な回避策でした。HyperBEAM はそれらを時代遅れにします。

アプリ開発者は既に、シミュレートされた呼び出しを検証可能な HTTP クエリに置き換えて、ステートを読み取るためのこの新しいパターンを採用しています。より多くのプロジェクトがこのアプローチを実装するにつれて、Permaweb アプリ全体で改善された開発者ワークフローとよりスムーズなユーザー体験が期待できます。

Permaweb の新しいコンピュートレイヤーの探索を[こちら](explore.md)で始めてください。

## References

- https://permaweb.github.io/HyperBEAM/
- https://github.com/permaweb/HyperBEAM
- https://cookbook_ao.arweave.net/guides/aoconnect/calling-dryrun.html

## Further reading

- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
- [AO Core: Everything you need to know](ao-core-deepdive.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [AO message passing explained](ao-message-passing-explained.md)
