---
title: AO mainnet is live
description:
permalink: /article/ao-mainnet-live.html
tags: []
---

![AO Mainnet Header](/static/images/ao-mainnet-header.webp)
AO mainnet is live. With many new updates to AO, there’s a lot to unpack. this post offers a high-level overview of what’s new and introduces AO's ecosystem funding model, the Permaweb Index (PI).

## What is AO?

[AO](https://ao.arweave.net/#/) is a hyper-parallel decentralized computer inspired by the actor-oriented paradigm. Unlike traditional blockchain computation models, AO scales efficiently through parallel processing, reducing redundancy while ensuring network verifiability and minimizing trust requirements.

Since February 2024, AO has been running on testnet, allowing users to interact with the network without fees while testing and refining the protocol. Now, AO is live on mainnet.

**What’s New?**

1. AO-Core
2. AO Token is transferable
3. Permaweb Index (PI)

## AO-Core

[AO-Core](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840/ot6Tu0GduY4_kKhoVw9rNPLOPix8DS_Z_3tBPhCK_v0) is a new powerful protocol that embeds blockchain-style computation verification directly into the internet’s infrastructure, specifically within the HTTP transport layer.

This means that every web request, whether loading a webpage or interacting with an API, can function as an AO transaction. Instead of requiring separate blockchain integrations, AO is seamlessly embedded into the existing web stack.

**Why does this matter?**

The internet has 5.5 billion users, while all blockchains combined have around 300 million. By integrating with existing web standards, AO can tap into this massive user base without friction.

This is enabled by [HTTP Message Signatures](https://oauth.net/http-signatures/), a new internet standard formalized last year. It allows native signing and verification of HTTP requests, making AO transactions verifiable and transparent without altering how people already use the web.

Additionally, AO eliminates the need for oracles. Since AO operates as a decentralized web server, data exchange between AO processes and the wider internet happens natively, without relying on third-party intermediaries.

**Scaling without redundancy**

Traditional blockchain networks like Ethereum and Solana rely on repeated execution of the same programs across multiple nodes, which limits scalability. AO, however, increases overall computational power as new hardware joins the network.

**Trusted Execution Environments (TEE)**

A [Trusted Execution Environment](https://en.wikipedia.org/wiki/Trusted_execution_environment) (TEE) is like a CPU with the security of a hardware wallet. It ensures that computations occur in a protected space where even the hosting machine cannot see or alter the data being processed.

Compared to [Zero-Knowledge Proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof) (ZKPs) and [Fully Homomorphic Encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption#Fully_homomorphic_encryption) (FHE), which provide privacy but with significant performance trade-offs, TEEs deliver high security with minimal computational overhead.

**How TEEs work in AO**

1. **Attestations of correctness** – TEEs can verify computations efficiently, even stacking across multiple hardware manufacturers for added trust.
2. **Private computation** – Users can run secure applications without revealing underlying data, similar to encrypted transactions but with real-time processing.

This approach brings blockchain-level verifiability to AI, finance, and other data-sensitive industries, without the massive computational costs of traditional cryptographic methods.

## AO fair launch token

![Fair launch](/static/images/ao-fair-launch.png)

AO follows a 100% fair launch model, no pre-mined tokens, no insider allocations. Instead, AO tokens are earned through network participation.

Now that 15% of AO tokens have been mined, the token can now be transferred. Depositors can still [bridge assets](https://ao.arweave.net/#/mint/deposits/) like stETH and DAI into AO’s pre-bridge system or hold AR to continue earning AO tokens.

AO’s native yield mechanism supports both ecosystem builders and core development efforts, aligning long-term incentives for all participants.

## Permaweb Index (PI)

![Permaweb Index](/static/images/pi.png)

The Permaweb Index (PI) acts as a default means of exchange on the permaweb, offering broad exposure to the entire ecosystem without active management. PI is a token representing ownership of key permaweb assets:

- 1/3 AO
- 1/3 AR
- 1/3 fair-launch projects

**How PI works**

- Any staked asset depositor or Arweave holder can delegate AO yield to new fair launch projects.
- In return, they receive a portion of those projects’ fair launch tokens.
- This enables projects to distribute 100% of their tokens to users while still securing development funding.

This DeFi technology built by [Autonomous Finance](https://www.autonomous.finance/) uses a combination of smart algorithms and autonomous agents to manage liquidity.

**Unlike traditional VC funding, this model eliminates zero-sum competition and fosters collaborative growth across the ecosystem.**

## Fair launch projects

![Header](/static/images/fair-projects.webp)

On the [AO mint](https://ao.arweave.net/#/mint/yield/) site, you can customize your rewards by adjusting the mix of PI, AO, and/or AR you earn, as well as selecting specific tokens from participating permaweb projects. These preferences will take effect on **March 14th**; until then, rewards will be issued in **AO tokens**.

The following projects are participating in the first fair launch, with more details on how to participate coming soon.

| **Project**                                 | **Description**                                                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [Apus Network](https://www.apus.network/#/) | Decentralized AI platform utilizing AO and Arweave for deterministic GPU computing.                                     |
| [ar.io](https://ar.io/)                     | First permanent cloud network providing permanent data storage and web hosting.                                         |
| [Basejump](https://basejump.xyz/home)       | Scalable, permissionless AI gaming substrate.                                                                           |
| [Bazar](https://bazar.arweave.net/)         | Digital content marketplace built on AO’s Universal Content Marketplace (UCM), a decentralized order book for creators. |
| [Botega](https://botega.defi.ao/)           | AI-powered DEX leveraging autonomous agents for optimized liquidity and advanced order execution.                       |
| [Protocol.Land](https://protocol.land/)     | Decentralized source control platform for building and deploying applications and protocols.                            |

## Summary

AO mainnet is live, introducing AO-Core, a tradeable AO token, and the Permaweb Index (PI) among many more updates. AO-Core embeds blockchain-style verifiability into the internet’s transport layer, enabling scalable decentralized computation. The AO token, launched through a fair launch distribution, is now tradeable, rewarding ecosystem participation.

PI offers a new funding model, providing exposure to AR, AO, and fair-launch project tokens, fostering collaboration across the permaweb. Several projects are already leveraging AO's fair launch model for decentralized marketplaces, AI, and permanent cloud infrastructure.

AO mainnet is a major step toward a more scalable, verifiable, and decentralized web. Learn more about the next steps for AO development in this [article](https://x.com/aoTheComputer/status/1888776191043137748). Stay updated by following **[AO on X.](https://x.com/aoTheComputer)**

---

This is not financial advice. Please do your own research.

Original post: https://paragraph.xyz/@afmedia/ao-mainnet-is-live
