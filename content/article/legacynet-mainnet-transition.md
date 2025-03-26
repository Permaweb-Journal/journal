---
title: "The transition from AO legacynet to mainnet: What builders and users need to know"
description: This post explains why the transition from legacynet to mainnet matters, the current state of HyperBEAM, and how both developers and users can prepare.
permalink: /article/legacynet-mainnet-transition.html
tags:
---
![Permaweb Header](/static/images/mainnet-transition.png)
## I. Introduction

The recent [HyperBEAM Milestone 3](https://x.com/samecwilliams/status/1903537896516194523) PR marks an important technical update to allow the transition from legacynet to mainnet by enabling legacynet processes to execute on HyperBEAM. Since data on both legacynet and mainnet is stored on Arweave, both networks can execute the same data. This shift will significantly improve AO’s scalability and efficiency. This post explains why the transition matters, the current state of HyperBEAM, and how both developers and users can prepare.

## II. Why it’s time to migrate to HyperBEAM

Currently, most apps in the ecosystem rely on the free compute cluster due to its accessibility and high rate limits. However, this centralized dependency creates bottlenecks. When the free cluster is overwhelmed, users may perceive AO as being “down,” when in reality, resources are simply limited on one subset of nodes. Users can always run their own AO nodes to avoid these issues.

ARIO, a key infrastructure provider in the ecosystem, has taken this approach by running its own compute units (CUs) on legacynet to support traffic to its processes. ARIO engineer DTF explains this in detail in [this thread](https://x.com/iamdtfiedler/status/1889045690866872762).

With HyperBEAM Milestone 3, developers can now connect their legacynet processes to HyperBEAM and access mainnet compute, offering a truly decentralized and scalable alternative that is no longer reliant on a few free compute nodes provided by ecosystem teams.

## III. Current state of HyperBEAM

Milestone 3 is feature-complete but still requires optimization. The **preview status** means that while some refinements are needed, it is live and ready for deployment in non-value-sensitive staging environments.

This version of [HyperBEAM](https://github.com/permaweb/HyperBEAM) allows developers to write data to legacynet scheduled processes and compute their outputs. However, it should not yet be relied upon for **100% accuracy** until further testing and validation are completed.

**Key highlights of milestone 3:**
- **Scheduler Compatibility:** GET and POST requests to AO legacynet schedulers via ~scheduler@1.0, enabling seamless execution on HyperBEAM.
- **TEE-Based Compute:** ~green-zone@1.0 supports **trusted execution environments (TEE)** for secure, decentralized computation.
- **Optimized Performance:** Enhanced **message encoding efficiency** and **ANS-104 tag normalization** for smoother processing.
- **JSON & Arweave Integration:** AO-Core messages can be **requested in specific codecs**, and HyperBEAM nodes can serve **Arweave data directly to browsers**.

## IV. AO key milestones

AO-Core is designed with modularity in mind. Think of it as a decentralized supercomputer where different “devices” can be plugged in for various computing tasks. This gives node operators flexibility over the services they offer to users. The development of HyperBEAM is happening in key milestones:

- **Milestone 1:** Launched on February 8, introducing AO-Core with support for paid compute services.
- **Milestone 2:** Added native execution devices, including schedulers, messaging systems, compute engines, and TEE (Trusted Execution Environment) support.
- **Milestone 3:** Made HyperBEAM nodes fully compatible with existing Legacynet processes, allowing a smooth transition from free compute nodes to a decentralized, scalable network.

[Learn more about the AO release nomenclature here](article/ao-nomenclature.md).

## V. How developers can prepare

As mentioned earlier, Milestone 3 is feature-complete but still requires optimization. Developers can begin writing data to legacynet scheduled processes and computing their outputs on HyperBEAM.

To get started, developers can spin up HyperBEAM nodes. More details can be found in the [HyperBEAM GitHub documentation](https://github.com/permaweb/HyperBEAM).
-  [Join the HyperBEAM node operator Discord here](https://discord.com/invite/nYbkajGd)

App developers can process payments on AO-Core through AOS. More details can be found in the [AO Cookbook guide](https://cookbook_ao.arweave.net/mainnet/ao-core-relay.html).
-  [Join the main AO Discord here](https://discord.gg/dYXtHwc9dc)

## VI. How users can prepare

Permaweb applications will soon begin migrating to HyperBEAM. DeFi platforms such as [Botega](https://x.com/Botega_AF) and [Permaswap](https://x.com/Permaswap), both of which have experienced the most severe Legacynet traffic bottlenecks, are prioritizing HyperBEAM integration as soon as possible. Follow their announcements for updates on their migration progress.

For broader ecosystem updates, the best sources are the official [AO account on X](https://x.com/aoTheComputer)and [Sam’s X](https://x.com/samecwilliams) account. The team is actively working to make this transition seamless, so keep an eye out for further developments and be ready to test the next iteration of the hyper-parallel computer.

See the full ecosystem in our permaweb [Explore](explore.md).

## VII. Conclusion

AO is moving toward a more decentralized future with HyperBEAM. While free compute has been a great on-ramp, transitioning to mainnet ensures sustainable growth and stability. Users should begin preparing by testing applications and staying informed on official updates.

AO is not like other blockchains. It presents a new approach to decentralized compute, and getting the core functionality right now is crucial and far better than trying to fix fundamental issues after the system is fully in place.

## Further reading

- [Legacynet SU compatibility](hyperbeam-milestone-3.md)
- [AO mainnet is live](ao-mainnet-live.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)
## Resources

**AO**
- [Website](https://ao.arweave.net/)
- [X](https://x.com/aoTheComputer)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)