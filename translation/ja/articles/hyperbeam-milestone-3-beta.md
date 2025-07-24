---
title: HyperBEAM Milestone 3がベータでローンチ
description: Milestone 3（Beta 1）はAOにとって重要な転換点を示します。HyperBEAM内でのlegacynet Process実行を可能にし、~greenzone@1.0と呼ばれる機密コンピュートDeviceを導入します。
permalink:
tags:
---

![M3 PR](/static/images/hb-m3.png)

HyperBEAM の大きなリリースが Arweave の 7 回目の誕生日にリリースされました。

Milestone 3（Beta 1）は、AO の開発における重要な転換点を示します。HyperBEAM 内での legacynet Process 実行を可能にし、`~greenzone@1.0`と呼ばれる機密コンピュートレイヤーを導入します。

このアップデートにより、AO は独立して運営されるノードの分散ネットワーク全体で、スケーラブルで検証可能なコンピュートにより近づきます。

## HyperBEAM Milestone 3 の新機能は？

[![M3 PR](/static/images/m3.jpeg)](https://github.com/permaweb/HyperBEAM/pull/309)

### 1. HyperBEAM でのレガシー AO Process サポート

元の legacynet 環境からの既存の AO Process が HTTP ベースの AO-Core hashpath を使用して HyperBEAM ノード上でアクセス・実行できるようになりました。これは過去と現在の間のギャップを埋め、古いプログラムがリライトなしに新しい AO アーキテクチャ上で実行できるようにします。

[Bazar Marketplace](https://bazar.arweave.net/)は、この機能を使用して HTTP エンドポイント経由で legacynet ステートを読み取る最初のプラットフォームの一つです。これにより複雑さが軽減され、効率性が向上し、dryrun の必要性が排除されます。以下の Bazar Process は下記の HyperBEAM エンドポイントから取得されます。

- Profile: https://tee-4.forward.computer/GKq5Ntih-UrUd3e4mCMQKIDzQNKAutm9d02vIsOI22c~process@1.0/now/zone
- Collection: https://tee-4.forward.computer/sWPnSrap7Kd2tYNOMbtWToFEgS7N26WVoo9q85yvgX0~process@1.0/now/collection
- Asset: https://tee-4.forward.computer/g06XtU3s-TxOf26mxTUh9-AXIP_yCiwZZkTwyhbyAaU~process@1.0/now/asset
- Asset Orderbook: https://tee-4.forward.computer/ewefs-szqyVEVHUI2p-NynOzoQMe3OgF5tKFTuh1IDI~process@1.0/now/orderbook
- Asset Activity: https://tee-4.forward.computer/UChAKefWFE378s0fjB9hLoM35nq-8glxpQxDrnYINyo~process@1.0/now/activity

より多くのプロジェクトが現在積極的に統合中です。legacynet から HyperBEAM への移行について[こちら](https://hyperbeam.ar.io/build/migrating-from-legacynet.html)で詳しく学んでください

### 2. `~greenzone@1.0`: トラスト最小化された実行環境

![HB Router](/static/images/hb-router.png)

新しい Device `~greenzone@1.0`は、AMD Trusted Execution Environment（TEE）内で実行される複数のノード間での安全で協調的な計算を可能にします。これらのノードは TEE 内で共有秘密鍵を生成し、AO-Core レスポンスの署名に使用されます。鍵は人間には決して知られません。厳格なハードウェアとセキュリティ基準を満たすノードのみが Green Zone に参加できます。

これにより、ハードウェアレベルで信頼が強制される機密コンピュートゾーンが作成されます。

現在の`~greenzone@1.0`環境（ID: `2u9-ER2V9riE4kcOhDp4YrqjZRpl0htPj6X0fI7qi2U`）はテストのみであり、金融トランザクションには使用すべきではありません。

#### Green Zone BETA に参加する方法

開始する最も簡単な方法は、[HyperBEAM OS リポジトリ](https://github.com/permaweb/HyperBEAM-OS)のデプロイメントツールを使用することです。デプロイメントを簡単にするためのドキュメントアップデートが進行中です。

サポートされているノード用に[https://dev-router.forward.computer](https://dev-router.forward.computer)でパブリックルーターが利用可能です。参加ノードはベータに参加し、AO subledger（`7yH0cmU9E74LpGzSY69du2QaLMeVcwL7vyn9NKvQ3cU`）を介してテストネット支払いを受け取り、最終リリース前にパフォーマンスの評価を支援できます。

### 3. 更新された開発者ドキュメントと Devices

![HB Docs](/static/images/hb-docs.png)

このリリースには約 30,000 行の新しいコード、いくつかの新しい Devices、開発者体験の改善が含まれています。構築を開始するために更新された[HyperBEAM ドキュメント](https://hyperbeam.ar.io/)をご覧ください。

完全なマイルストーンが main にマージされる際に、より詳細なリリースノートが含まれる予定です。

## なぜこのアップデートが重要なのか

HyperBEAM は現在、将来とレガシーの両方の AO Process のオペレーティングシステムです。HTTP ベースのステート読み取りとコンピュートのサポートにより、既存の Permaweb アプリケーションはコードをリライトすることなく AO を統合できます。

`~greenzone@1.0`を通じたトラスト最小化されたコンピュートの追加により、分散 AI、ピアツーピアアプリケーション、その他のユースケース向けに新しいプライバシーと協調レイヤーが導入されます。この Device に関するより多くのドキュメントは、完全なプロダクションローンチとともにリリースされる予定です。

今日、[HyperBEAM Devices](https://hyperbeam.ar.io/build/building-devices.html)での構築を開始するか、[legacynet からの移行](https://hyperbeam.ar.io/build/migrating-from-legacynet.html)方法を探索してください。

## Further reading

- [HyperBEAM Overview](hyperbeam-overview.md)
- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
- [HyperBEAM eliminates the need for DryRuns](hyperbeam-eliminates-dryruns.md)
- [AO-Core Overview](ao-core-deepdive.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)

## Resources

- [Website](https://ao.arweave.net/)
- [AO Cookbook](https://cookbook_ao.arweave.net/)
- [HyperBEAM Docs](https://hyperbeam.ar.io/)
- [X](https://x.com/aoTheComputer)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
