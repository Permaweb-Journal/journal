---
title: "AO-Core: 知っておくべきすべてのこと"
description: AO-Coreがスケーラブルで検証可能なコンピュートをどのように支えているかを探る。
permalink:
tags:
---

![Permaweb Header](/static/images/ao-core-header.png)

## I. はじめに

[AO-Core](https://x.com/aoTheComputer/status/1888367204523000259)は、[Permaweb](reference/permaweb.md)に検証可能性、モジュール性、スケーラビリティをもたらすよう設計された分散計算プロトコルです。モノリシックな仮想マシンやコンセンサスメカニズムに計算を強制するのではなく、AO-Core は合成可能な Message、暗号化ハッシュパス、標準 Web プロトコルによる Android、ローレベル実行モデルを定義します。

ブロックチェーングレードの保証を HTTP レイヤーに直接埋め込むことで、AO-Core は開発者が誰でも検査、証明、拡張可能なリアクティブで検証可能なシステムを構築できるようにします。これは、ハッシュリンクされたロジックと分散ステートに基づく、Web の新しい実行レイヤーを創造します。

## II. AO-Core とは何か？

その中核において、AO-Core は HTTP をプログラマブルな基盤に変換するプロトコルです。すべてのデータは Message になります。Message は合成、実行、検証することができます。ハッシュパスは正確性の暗号証明として機能します。`~process@1.0`や`~stack@1.0`などの軽量インタープリタモジュールである Devices は、Message がどのように読み取り、変換、または結合されるかを定義します。

単一の仮想マシンを強制する代わりに、AO-Core はメタ-VM として機能します。開発者は Message と Devices を組み合わせることで、独自の実行ロジックと検証メカニズムを定義できます。このモジュール式アプローチは、TEE から WASM から ZKP まで、幅広いコンピュートモデルをサポートします。

## III. なぜハッシュパスが重要なのか

ハッシュパスは相互作用シーケンスの暗号表現です。各計算ステップは、ある Message から別の Message への変換として表され、結果として生じるハッシュパスは現在のステートを、それを生み出した入力の完全なトレースにリンクします。

このメカニズムにより、分散システム全体で検証可能な実行が可能になります。ノードは計算を検証するために再実行する必要がありません。代わりに、正確性、再現可能性、合成可能性を保証する Merkle 式証明であるハッシュパスを検証します。ハッシュパスは AO-Core の設計の基盤であり、協調ではなく再現可能性に基づく分散コンセンサスモデルを形成します。

以下は、金融トランザクションにおいてハッシュパスが Message としてどのように機能するかの例です。
![Hashpaths Example](/static/images/hashpath.png)

## IV. HTTP を通じた検証可能性

AO-Core は標準 HTTP request を検証可能な計算ステップに変換します。各 Message には構造化ヘッダーが含まれ、[HTTP Message Signatures (RFC 9421)](https://datatracker.ietf.org/doc/html/rfc9421)を使用してオプションで署名されます。すべての URL が計算へのポインタになります。各パスセグメントは関数呼び出しや Message 変換を表します。

AO-Core は HTTP セマンティクスと整合するため、開発者はブラウザ、curl、またはプロキシを使用してシステムと相互作用できます。結果は署名され、キャッシュやリダイレクトが可能で、ネットワークにローカル検証可能性を持つグローバルアドレス可能性を与えます。結果として、標準 Web ツールでアクセス可能な暗号的に健全なコンピュートレイヤーが生まれます。

## V. グローバルコンセンサスなしの実行

従来のブロックチェーンは、すべてのノードがすべての計算に合意することを要求します。AO-Core は異なるルートを取ります。コンセンサスはローカル証明とハッシュパス検証に置き換えられます。

ノードは必要なものを計算し、結果に署名します。別のノードが出力を検証したい場合は、ハッシュパスを検証します。このアプローチは水平方向にスケールします。同期ラウンドはなく、検証可能な出力のみです。このコンセンサスの創発モデルは、時に「ファジーヘッドコンセンサス」と呼ばれ、重要な時にのみ検証される計算です。

## VI. 柔軟な実行環境

AO-Core での計算は Devices によって処理されます。各 Device は、Message をどのように解釈し適用するかを定義します。開発者は以下のことができます：

- `~wasm64@1.0`を使用して WASM プログラムを実行
- `~process@1.0`で共有 Process を使用
- `~json-iface@1.0`で JSON と HTTP API をブリッジ
- [`~snp@1.0`で TEE におけるハードウェア検証実行を実行](https://mirror.xyz/0xE84A501212d68Ec386CAdAA91AF70D8dAF795C72/8DH98NsNmM5vCR5W6erf4-BhYLgk5McvOinCHzlSLzY)
- プライバシー保護ロジックのためのゼロ知識証明を統合

モジュール式 Device モデルにより、開発者は独自の実行スタックを定義し、アプリケーションに適したトラストモデルとパフォーマンストレードオフを選択できます。サポートされている Devices の完全なリストは[こちら](https://github.com/permaweb/HyperBEAM)をご覧ください。

[HyperBEAM でカスタム Device を構築する方法を学ぶ。](https://mirror.xyz/0xE84A501212d68Ec386CAdAA91AF70D8dAF795C72/iLNw4j49tiB7XUE6EUayuFXUvdXnG-USTUBjK0HUH9c)

## VII. 開発者体験

AO-Core は Web での作業方法を知る開発者のために構築されました。[Lua](https://cookbook_ao.arweave.net/concepts/lua.html)や[WASM](https://cookbook_ao.arweave.net/references/wasm.html)でプログラムを書き、HTTP で Message を送信し、ヘッダー経由で出力を検証し、URL を使用してシステムを合成できます。

カスタムクライアントや SDK は必要ありません。ネイティブプロトコルで構築し、デフォルトで暗号セキュリティ保証を継承します。これにより、モジュール式で検査可能で永続的な分散アプリケーションを開発する新しい方法が解放されます。

より多くの AO リソースについては[Learn](learn.md)ページをご覧ください。

## VIII. 結論

AO-Core は分散計算を再定義します。グローバルコンピュータをエミュレートする代わりに、Message、Devices、検証可能なハッシュパスで構成されたパーミッションレス実行ファブリックを構築します。計算はアドレス可能で検査可能になります。すべての URL がプログラムです。すべての結果は証明可能です。

これは、オープンでモジュール式で、デフォルトで暗号的に健全なアプリケーションを構築したい開発者のためのシステムです。AO-Core は新しい Web ネイティブコンピュートレイヤーの基盤です。

## References

- https://permaweb.github.io/HyperBEAM/
- https://github.com/permaweb/HyperBEAM
- https://x.com/aoTheComputer/status/1888367204523000259

## Further reading

- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)
- [How AO processes fetch Arweave data with assignments](fetching-arweave-data-in-ao.md)
- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
