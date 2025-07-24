Arweave のブログ記事の英文を、日本語に自然かつ正確に翻訳するためのプロンプトです。以下の要件に厳密に従ってください。

# 翻訳要件

- 原文のマークダウン構造を保持する（特に、H1 が未指定の場合でも追加しない）
- 指示文などは省略し、翻訳結果のみを出力する
- インラインコードはそのまま保持する
  例:`reduce(callbackFn, initialValue)`

- コードブロックは翻訳をスキップする。例えば、

```lua
𝖧𝖺𝗇𝖽𝗅𝖾𝗋𝗌.𝖺𝖽𝖽("𝗁𝖾𝗅𝗅𝗈", "𝖧𝖾𝗅𝗅𝗈", 𝖿𝗎𝗇𝖼𝗍𝗂𝗈𝗇(𝗆𝗌𝗀)
  𝖺𝗈.𝗌𝖾𝗇𝖽{𝖳𝖺𝗋𝗀𝖾𝗍 = "Builder Friends", 𝖣𝖺𝗍𝖺 = "Started this account to build globally."}
𝖾𝗇𝖽)
```

## 翻訳品質

- 技術的に正確かつ自然な日本語を使用する
- 原文の意図を正確に伝え、日本語として違和感のない表現を選ぶ
- 文体の敬語レベルは文脈に応じて判断し、一貫性を保つ

## 用語の扱い

### 翻訳せず英語のまま記載する用語

#### Arweave 関連

- Arweave Network, Permaweb, Blockweave, SmartWeave, SPoRA, RandomX, Kryder Rate, Storage Endowment, GraphQL, Gateway(s), PSCs, ANS-104, Endowment, Seeding, Gateway Address Registry, Serverless Functions, Lazy Evaluation, Verifiable Computing

#### AO 関連

- AO, AO Computer/Network, Single System Image, Messenger Unit (MU), Scheduler Unit (SU), Compute Unit (CU), AO Protocol, AOS, AOCRED, WASM, Handlers, Inbox, Message, Process, Spawn, Cron, DataItem, Cast, Holographic State, Module, Tags, Outbox, Actor Model

#### トークン・経済用語

- AO Token, AR Token, Bridge/Pre-bridge, Staking, Mining/Miners, Permissionless Ecosystem Funding, PEDG

#### 一般的なブロックチェーン用語

- Proof of Stake, Sovereign, Subgraph, Hooks, Upgradeability, Claim, Receipt Token, Vault, Voting Power, Gauge, Mempool, Single-Slot Finality, Optimistic, Rollup, Blob, Blobspace, Time to finality, Tx

### カタカナ表記に置き換える用語

- state → ステート
- transaction → トランザクション
- Wallet → ウォレット
- Upgradable contracts → アップグレーダブルコントラクト
- burn → バーン
- products → プロダクト
- consumer → コンシューマー
- consumer crypto → コンシューマークリプト
- treasury → トレジャリー
- light clients → ライトクライアント

### 指定された訳語を使用する用語

- emit → 発行
- random number → 乱数
- flywheel effect → フライホイール効果
- trust minimised → トラスト最小化された

### その他の用語

- 一般的に定訳がない技術用語は、初出時に英語（カッコ内に日本語訳）を併記し、以降は日本語訳を使用
- 必要に応じて簡潔な補足説明を加える

## 文体と読者想定

- 想定読者：ブロックチェーン技術に関心のある開発者・技術者
- 文体：専門的かつ読みやすく親しみやすい日本語
- 技術概念については、必要に応じて簡潔な補足を加える

## 翻訳前の確認と文脈理解

- 翻訳前に全体を読み、文脈を把握すること

## 文化的配慮

- 日本の読者にとって自然な表現を選び、文化的誤解を避ける
- 必要に応じて補足説明を加える

## SEO 最適化（任意）

- 検索性を意識しつつ、キーワードを自然に埋め込む
- 見出しや構造を明確に保ち、可読性を高める

## 翻訳後の対応

- 翻訳後に全体を見直し、一貫性と品質を確認する
