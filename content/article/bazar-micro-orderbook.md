---
title: Scaling Bazar with Micro-Orderbooks and HyperBEAM
description: Explore how Bazar is scaling with micro-orderbooks, HyperBEAM integration, and modular architecture to power the permaweb’s decentralized media ecosystem.
permalink:
tags:
---

![Bazar HyperBEAM Header](/static/images/bazar-hb-header.png)

## I. Introduction

[Bazar](https://bazar.arweave.net/) is evolving alongside the permaweb’s rapidly advancing infrastructure. With the launch of [HyperBEAM Milestone 3](hyperbeam-milestone-3-beta.md), legacynet processes can now communicate more efficiently with HyperBEAM.

Over the past few months, the team quietly re-architected Bazar’s backend by replacing the single global orderbook with a modular, actor-oriented system. HyperBEAM was integrated to read process state more efficiently. This upgrade unlocks greater scalability and resilience to support the growing Decentralized Media Ecosystem.

See the full Bazar presentation from Arweave Day Berlin [here](https://x.com/OurBazAR/status/1934728336485261678).

## II. Why the global orderbook didn’t scale

![Bazar Global Orderbook](/static/images/global-orderbook.png)

In the original version of Bazar, a single AO process handled every order for every asset. The Universal Content Marketplace (UCM) orderbook was centralized in one process.

This led to:

- Bottlenecks for high-volume collections
- Single points of failure
- CPU-bound slowdowns

Every asset, no matter how small, had to queue into the same compute lane. If that single process failed, the entire marketplace stalled.

## III. The solution: Micro-orderbooks

![Bazar Micro-orderbook](/static/images/micro-orderbook.png)

To address these limitations, we introduced Micro-orderbooks. These are independent AO processes for each asset’s orderbook and activity tracking.

Now, when an atomic asset is listed for sale, it spawns its own isolated processes. This enables:

- Fully async operations
- Per-asset concurrency
- Horizontal scaling across nodes
- Clean fault isolation

## IV. Why use an actor-oriented approach at the app level

By applying AO’s actor-oriented model at the application layer, Bazar is positioned to scale the monetization layer of the permaweb.

AO offers a fundamentally different approach to decentralized compute. Bringing this design pattern into application development unlocks modularity, reliability, and performance.

With the launch of HyperBEAM Milestone 3, Bazar also removed dryruns from core processes. State reads now occur directly over HTTP via HyperBEAM, reducing compute overhead and simplifying architecture. Below are key processes and the endpoints used to fetch their state:

![Bazar HyperBEAM Header](/static/images/bazar-hb.png)

## V. ARNS integration and developer tooling

Beyond architectural improvements, front end updates are in development, including:

- Trading support for ARNS names
- AO Profiles with primary name support
- Enhanced developer tools in Permaweb-libs

These upgrades make Bazar more composable across permaweb profiles and naming systems. Permaweb-libs offers tooling for builders looking to integrate features such as Profiles, Atomic Assets, Collections, Comments and Zones into their apps.

Explore the SDK [here](https://github.com/permaweb/permaweb-libs).

## VI. Why Bazar is important for the permaweb

![Bazar HyperBEAM Header](/static/images/dme.png)

Some might ask: why do we need another NFT marketplace?

Bazar isn’t just an NFT marketplace. It’s an economic layer for a new Decentralized Media Ecosystem (DME) emerging on the permaweb. Platforms like [Odysee](https://x.com/OdyseeTeam) and [Portal](https://x.com/PortalInto) are beginning to demonstrate this vision by serving as user interfaces for a shared media graph.

Built on Arweave and AO, these apps use the same underlying data but present it through different interfaces. This approach creates an interconnected ecosystem without cold starts or data silos.

Bazar and the UCM protocol provide the financial infrastructure for licensing and trading media on the permaweb. Bazar may be one of the first user interfaces for this protocol, but we expect many more to emerge, tailored for specific platforms, use cases, and communities.

## VII. Conclusion

Bazar’s journey has taken it through multiple compute systems and infrastructure upgrades, all while supporting creators experimenting with a new tech environment.

The legacy version proved that atomic assets could be traded on Arweave. Now, with a modular architecture and HyperBEAM implementations, Bazar is ready to serve as the economic engine of the permaweb media stack.

If you’re a creator, builder, or curious explorer of the permaweb, [join the Bazar Discord](https://discord.gg/vS2fYJNucN) to get involved and connect with the community.

## Further reading

- [Permaweb Index](permaweb-index.md)
- [PIXL Token Breakdown](pixl-fair-launch.md)
- [Bazar Community Hub](bazar-community-hub.md)
