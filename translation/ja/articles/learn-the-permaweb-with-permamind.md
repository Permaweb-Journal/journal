## Permamindで Permaweb を学ぶ \[ゲスト投稿\]

Jul 08, 20254 min read

![Permamind Header](https://permaweb-journal.arweave.net/static/images/permamind-header.png)

## はじめに

- **Permamindとは何か？**
  - Permamind は Arweave と AO 上に構築された世界初の永続的で分散型のAIメモリーシステムですが、本ガイドでは Permaweb エコシステムの個人的で常に最新のドキュメントアシスタントとしてのパワーに焦点を当てます
  - 最新の公式ドキュメント（`AO Cookbook`、`HyperBEAM`など）がプリロードされており、複雑な技術的質問に正確に回答できる情報豊富なLLMとして動作します
  - 古い情報やハルシネーションされた回答を決して提供しない、24時間365日利用可能な Permaweb エキスパートを持つようなものです
- **本ガイドの内容**
  - この投稿では、サーバーのインストールからお気に入りのAIクライアントの接続、そして最初のクエリの実行まで、セットアップ プロセス全体を案内します
  - **Claude Desktop**、**Cursor**、**Raycast**の具体的な手順を提供します
- **なぜ重要なのか**
  - 複数のドキュメントを調べたり、標準的なLLMから一般的で古い回答を得る代わりに、Permaweb 技術スタックに関する正確で最新の情報に即座にアクセスできます
  - AO 上で構築する開発者、Permaweb を学ぶ人、または HyperBEAM での旅を始める人に最適です

## パート1：Permamind サーバーのインストール

### 前提条件

- Node.js バージョン20以上が必要です。以下のコマンドでバージョンを確認できます：

  ```bash
  node -v
  ```

### インストール手順

- permamind をインストールするには、ターミナルを開いて npm を使用して Permamind パッケージをグローバルにインストールします。

  ```bash
  npm i -g permamind
  ```

## **パート2：AIクライアントの接続**

ローカルの Permamind サーバーが実行中になったので、AIを活用した開発ツールに接続しましょう。

### Claude Desktop

1.  **Claude Desktop の設定ファイルを見つける**：

    - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
    - **Windows**: `%APPDATA%\\Claude\\claude_desktop_config.json`

2.  **Permamind サーバー設定を追加する**：設定ファイルを開いて、以下の MCP サーバー設定を追加します：

    ```json
    {
      "mcpServers": {
        "Permamind": {
          "command": "npx",
          "args": ["permamind"]
        }
      }
    }
    ```

3.  **Claude Desktop を再起動**して変更を反映させます。
4.  **接続を確認**：Claude Desktop 内の利用可能なツール/サーバーに Permamind サーバーが表示されるはずです。

### Cursor

1.  Cursor エディタを開きます。
2.  `Cursor Settings` > `Tools & Integrations` に移動します。
3.  `New MCP server` をクリックします。
4.  以下の設定を追加します：

    ```json
    {
      "mcpServers": {
        "Permamind": {
          "command": "npx",
          "args": ["permamind"]
        }
      }
    }
    ```

5.  設定を保存して Cursor を再起動し、変更を反映させます。

### Raycast

1.  Raycast を開いて「MCP」を検索するか、AI設定に移動します。
2.  **Install MCP Server** を検索します。
3.  設定フォームに入力します：

    | フィールド        | 値                               |
    | --------------- | --------------------------------- |
    | **Transport**   | `Standard Input/Output` を選択    |
    | **Command**     | `npx` を入力                       |
    | **Arguments**   | `permamind` を入力                 |
    | **Description** | このサーバーのカスタム説明 |

4.  **Cmd** + **Return** でサーバーをインストールします。
5.  `@permamind <Your query here>` を使用して MCP サーバーを呼び出します。

## パート3：サンプル実行

すべてが正常に動作することを確認しましょう。実行中の Permamind サーバーは、AO、Permaweb Cookbook、HyperBEAM などの最新ドキュメントで事前設定されています。

### プロンプト

設定したクライアント（Claude、Cursor、または Raycast）で新しいチャットを開始し、AO エコシステムの知識を必要とする質問をしてください。

**例えば**：

- HyperBEAM とは何ですか？
- AO Process を HyperBEAM に公開するにはどうすればよいですか？
- AR.IO の Wayfinder SDK を使用するにはどうすればよいですか？

### 期待される出力

AIクライアントは、公式ドキュメントに基づいて詳細で正確な回答を提供するはずです。Permamind が正しいコンテキストを提供しているため、一般的でハルシネーションされた回答は提供されません。

**例** ![Expose AO Process](https://hackmd.io/_uploads/SkIxNe9rel.png)

### どのように動作するのか？

クライアントがプロンプトをローカルの Permamind サーバーに送信しました。サーバーはトピックを識別し、統合された Permaweb ドキュメントを使用してLLMに正しい応答を形成するための必要な情報を提供しました。

## **まとめと次のステップ**

おめでとうございます！ローカルで実行される個人的で常に最新の permaweb アシスタントを手に入れました。サーバーのインストール、クライアントの接続、そして私たちのエコシステムの公式ドキュメントを使用して正確で最新の回答を提供する能力の検証に成功しました。

これは開発ワークフローの大幅な向上であり、Permaweb 技術での学習、構築、デバッグを今まで以上に高速で行うことができます。AO、HyperBEAM、または Permaweb の任意の部分で作業する際に、古い回答や一般的なLLM応答はもうありません。

Dylan Shade は Forward Research のソフトウェア開発者です。Dylan を [X](https://x.com/dpshade22) でフォローしてください。

Jonathon Green は Arweave/AO エコシステムを探求するソフトウェア開発者です。Jonathan を [X](https://x.com/ALLiDoizCode) でフォローしてください。

---

**開示**：これは外部の寄稿者によって提出されたゲスト投稿です。表明された意見は彼らのものであり、Permaweb Journal の意見を必ずしも反映するものではありません。

---