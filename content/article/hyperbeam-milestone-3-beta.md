---
title: HyperBEAM Milestone 3 Launches in Beta
description: Milestone 3 (Beta 1) marks a critical turning point for AO. It enables legacynet process execution inside HyperBEAM and introduces a confidential compute device called ~greenzone@1.0.
permalink:
tags:
---

![M3 PR](/static/images/hb-m3.png)

A major release for HyperBEAM just dropped on Arweave’s 7th birthday.

Milestone 3 (Beta 1) marks a critical turning point in AO’s development. It enables legacynet process execution inside HyperBEAM and introduces a confidential compute layer called `~greenzone@1.0`.

This update brings AO closer to scalable, verifiable compute across a decentralized network of independently operated nodes.

## What’s new in HyperBEAM Milestone 3?

[![M3 PR](/static/images/m3.jpeg)](https://github.com/permaweb/HyperBEAM/pull/309)

### 1. Legacy AO process support in hyperBEAM

Existing AO processes from the original legacynet environment can now be accessed and executed on HyperBEAM nodes using HTTP-based AO-Core hashpaths. This bridges the gap between past and present, allowing older programs to run on the new AO architecture without rewrites.

[Bazar Marketplace](https://bazar.arweave.net/) is one of the first platforms to use this capability, reading legacynet state via HTTP endpoints. This reduces complexity, improves efficiency, and eliminates the need for dryruns. The following Bazar processes are fetched from the below HyperBEAM endpoints.

- Profile: https://tee-4.forward.computer/GKq5Ntih-UrUd3e4mCMQKIDzQNKAutm9d02vIsOI22c~process@1.0/now/zone
- Collection: https://tee-4.forward.computer/sWPnSrap7Kd2tYNOMbtWToFEgS7N26WVoo9q85yvgX0~process@1.0/now/collection
- Asset: https://tee-4.forward.computer/g06XtU3s-TxOf26mxTUh9-AXIP_yCiwZZkTwyhbyAaU~process@1.0/now/asset
- Asset Orderbook: https://tee-4.forward.computer/ewefs-szqyVEVHUI2p-NynOzoQMe3OgF5tKFTuh1IDI~process@1.0/now/orderbook
- Asset Activity: https://tee-4.forward.computer/UChAKefWFE378s0fjB9hLoM35nq-8glxpQxDrnYINyo~process@1.0/now/activity

More projects are actively integrating as we speak. Learn more about migrating from legacynet to HyperBEAM [here](https://hyperbeam.ar.io/build/migrating-from-legacynet.html)

### 2. `~greenzone@1.0`: Trust-minimized execution environment

![HB Router](/static/images/hb-router.png)

A new device, `~greenzone@1.0`, enables secure, coordinated computation between multiple nodes running inside AMD Trusted Execution Environments (TEEs). These nodes generate a shared private key inside the TEE, which is used to sign AO-Core responses. The key is never known to any human. Only nodes that meet strict hardware and security criteria can join the Green Zone.

This creates a confidential compute zone where trust is enforced at the hardware level.

The current `~greenzone@1.0` environment (ID: `2u9-ER2V9riE4kcOhDp4YrqjZRpl0htPj6X0fI7qi2U`) is for testing only and should not be used for financial transactions.

#### How to join the Green Zone BETA

The simplest way to get started is by using the deployment tools in the [HyperBEAM OS repository](https://github.com/permaweb/HyperBEAM-OS). Documentation updates are in progress to make deployment easier.

A public router is available at [https://dev-router.forward.computer](https://dev-router.forward.computer) for supported nodes. Participating nodes can join the beta, receive testnet payments via AO subledger (`7yH0cmU9E74LpGzSY69du2QaLMeVcwL7vyn9NKvQ3cU`), and help evaluate performance ahead of the final release.

### 3. Updated developer docs and devices

![HB Docs](/static/images/hb-docs.png)

This release includes around 30,000 lines of new code, several new devices, and developer experience improvements. Explore the updated [HyperBEAM documentation](https://hyperbeam.ar.io/) to start building.

More detailed release notes will be included when the full milestone is merged into main.

## Why this update matters

HyperBEAM is now the operating system for both future and legacy AO processes. With support for HTTP-based state reads and compute, existing permaweb applications can integrate AO without rewriting code.

The addition of trust-minimized compute through `~greenzone@1.0` introduces a new layer of privacy and coordination for decentralized AI, peer-to-peer applications, and other use cases. More documentation on this device will be released with the full production launch.

Start building with [HyperBEAM devices](https://hyperbeam.ar.io/build/building-devices.html) or explore how to [migrate from legacynet](https://hyperbeam.ar.io/build/migrating-from-legacynet.html) today.

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
