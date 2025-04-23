---
title: AO release nomenclature explained
description: Understand AO’s release phases and terminology.
permalink: /article/ao-nomenclature.html
published: 2025-02-27
tags: 
comments:
---

![AO Nomenclature Header](/static/images/ao-nomenclature-header.png)


AO mainnet went live in February 2025, introducing AO-Core and early access to the HyperBEAM operating system. The launch sparked mixed reactions, as many were unclear about the status of the mainnet implementations. AO founder Sam Williams addressed these concerns in a recent AO Node onboarding workshop, and I want to highlight a few of his key points here.

## AO mainnet status

Like many ecosystem projects, AO follows a standardized [software release cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle#Pre-alpha), categorizing protocols into the following phases:

- **Preview**: The protocol is available for users to try and provide feedback on but is expected to change.
- **Early**: The protocol is considered feature-complete by its developers, though small tweaks may still be needed.
- **Candidate**: The initial developers believe no further changes to the core protocol are necessary. At this stage, protocols offer real, enforceable rights to their end users.
- **Stable**: The community has largely agreed that the protocol will not change in the future. This usually happens when a disagreement forces the protocol to ossify.

The following graphic illustrates the current AO-Core stack as of February 25. Candidate-phase components (AO-Core, Arweave) are in green. Preview-phase components (HyperBEAM) are in orange. Early Access implementations (security, payments, execution) are in red.

![AO-Core Stack](/static/images/ao-core-stack.png)

## Milestone 1: AO-Core

On February 9, AO reached Milestone 1, with AO-Core achieving Candidate status. This milestone introduced payment infrastructure, allowing users to pay operators for “fast lane” computation. These payments are already integrated into key developer tools, including AOS and aoconnect.

AO-Core embeds blockchain-style computation verification directly into the internet’s infrastructure, specifically within the HTTP transport layer, rather than creating a separate network. While blockchains collectively have around 300 million users, the internet has 5.5 billion. By integrating with existing web standards, AO can seamlessly tap into this vast user base. More on AO-Core [here](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840/oWaY_b7-uHPwXkxxlNQV79GRcsf2qCxYwNr4fcJHJlI).

## Milestone 2: HyperBEAM

On February 25, early access to Milestone 2 was released, introducing HyperBEAM-resident compute with embedded CUs. This enables AO processes to run natively inside HyperBEAM, leveraging its built-in scheduling, messaging, and compute devices for the first time. Node operators can now execute these devices in TEE-enabled environments, ensuring verifiable hashpath attestations.

HyperBEAM is a modular operating system for AO-Core, allowing node operators to choose which AO devices to run and offer them to users for a fee. These devices function as blockchain-like modules that can be combined to build applications, managing compute execution while abstracting hardware provisioning for developers. More on HyperBEAM [here](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840/ot6Tu0GduY4_kKhoVw9rNPLOPix8DS_Z_3tBPhCK_v0).

## What this means for the permaweb ecosystem

Many permaweb applications still run on AO legacynet. Since all legacynet transactions are permanently stored on Arweave, the data remains accessible and can continue to be used as long as the infrastructure is supported.

The transition to HyperBEAM nodes is happening seamlessly, without downtime, as both systems share the same underlying data structures on Arweave, ensuring interoperability.

Legacynet allowed developers to experiment without transaction fees, but as demand grew, congestion became a problem. With no transaction fees and uncapped user demand, congestion was inevitable. Many applications had to implement workarounds that are no longer necessary on mainnet.

AO-Core now introduces a payment mechanism for sending messages, ensuring a sustainable network. Permaweb applications are actively transitioning to HyperBEAM as they adapt to this model.

## Challenges of the AO mainnet launch

The AO mainnet launch faced mixed reactions, partly due to the complexity of the technology and communication gaps leading up to the release.

AO is radically different from existing blockchain architectures. Most popular blockchains use a global shared state, which have already proven to be unscalable. AO upends conventional blockchain development for a new [actor-oriented](https://en.wikipedia.org/wiki/Actor_model) approach. This comes with new challenges to develop and communicate to the world.

The AO team is also learning from the mistakes of other crypto ecosystems. Many projects prioritize rapid user adoption and “hype” early in their launch cycles to validate their concepts and keep investors happy. This approach is ultimately shortsighted. Ethereum’s scalability issues were evident early on, but the ecosystem had already grown too large to pivot to a more scalable architecture.

The AO team was aware of this dilemma and sought to avoid it at all costs. After just a few months of testnet, the team was already working on a completely new implementation of AO. This came at the cost of communication. Since these changes were actively in development, the team couldn’t fully share them with the community in real time. As a result, the mainnet launch may have felt abrupt for some in the ecosystem.

If AO had remained unchanged for longer, the transition to mainnet would have been even more difficult. Now that mainnet is live, the AO team is focused on developer documentation and community resources to ensure a smooth migration from legacynet to AO-Core.

## What’s next?

AO has already processed 1.5 billion messages since launch, laying the foundation for an expanding ecosystem. Key developments ahead include:

- **Community-built devices:** Developers are adding new capabilities, including GPU-based implementations.
- **Legacynet compatibility**: Existing processes will soon be able to run inside HyperBEAM nodes, easing the transition to AO-Core.
- **The Green Zone**: A secure TEE-enabled node network, where operators stake AO tokens for participation.
- **Optimized WASM execution:** Ahead-of-Time (AOT) compilation will bring near-native execution speeds.

## Conclusion

The AO mainnet launch was a significant step forward, though not without challenges. Following a clear software release framework helps clarify where AO and its components stand today. This standardized release approach is also adopted by ecosystem projects, helping users understand the status of tools and applications they use.

Have questions about AO or want to connect with the community? Join the [AO Discord](https://discord.gg/dYXtHwc9dc). Want to run a HyperBEAM node? Check out the [HyperBEAM Discord](https://discord.gg/CaeanrztFH).

---

This is not financial advice. Please do your own research.

Original post: https://paragraph.xyz/@afmedia/ao-release-nomenclature-explained
