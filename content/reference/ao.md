---
title: AO 101 - Intro to the Hyper Parallel Computer
description: AO is a decentralized supercomputer powered by Arweave.
permalink: 
tags: 
excludeMeta: "true"
---

## What is AO?

AO is a decentralized supercomputer powered by Arweave. AO is known as the “hyper-parallel computer” because it offers decentralized compute without any practical bounds on scale. It combines the reliability of blockchain technology with the efficiency of cloud services, enabling limitless computation and storage without bottlenecks.

## How does AO work?

At the heart of AO is the concept of **processes**, which are independent programs running on the network. These processes communicate by sending and receiving messages, ensuring a seamless, decentralized computing environment.

**Core components of AO**

AO is powered by several key components that handle storage, computation, and communication:

- **AO-Core** – The foundational protocol that enables processes and message passing.
- **HyperBEAM** – A high-performance execution engine for running AO processes efficiently.
- **Messenger Units (MUs)** – Route messages and manage interactions between processes.
- **Compute Units (CUs)** – Execute computations and verify results.
- **Scheduler Units (SUs)** – Maintain order and integrity of all messages.

For more detailed information on how these components work together, visit the [core components](ao-core-components.md) page.

## AO Mainnet vs Legacynet:

AO is transitioning from its **Legacynet** test phase into a fully operational **mainnet** powered by AO-Core and HyperBEAM.

- **Legacynet**: AO’s original testnet, designed for early experimentation. While functional, it had limitations in scalability and execution speed due to reliance on free compute nodes provided by Forward Research and other contributors.
- **Mainnet (AO-Core)**: The production-ready, high-performance version of AO. AO-Core is the **modular execution layer** that ensures decentralized computation, state integrity, and verifiability on Arweave. HyperBEAM is the client implementation for AO-Core.

## AO-Core

AO-Core is a protocol for decentralized computation, designed to support multiple computational models rather than enforcing a single architecture. It provides a framework where different execution models can be integrated.

AO-Core’s key components include:

- Hashpaths – A way to reference a program’s state before execution using Merklized lists of inputs and initial states.
- Unified state representation – Program states are structured as [HTTP](https://www.rfc-editor.org/rfc/rfc9110.html) documents, ensuring compatibility with existing web protocols.
- Attestations – Nodes can verify and challenge each other’s representations of program states, enabling cryptographic and economic mechanisms for trust.
- Meta-VM – A flexible environment that allows multiple virtual machines and computational models to run within AO-Core while maintaining a unified format for state verification.

## HyperBEAM

HyperBeam is a client implementation of the AO-Core protocol, functioning as the node software for AO’s decentralized operating system. It abstracts hardware details, allowing programs to run seamlessly across the network.

Node operators can offer their machine’s computing power by running different devices and charging users for execution. Each HyperBeam node is configured using the ~meta@1.0 device, which manages hardware specs, supported devices, metering, and payments.

[→ More details on the latest HyperBEAM milestone](article/hyperbeam-milestone-3.md)

## How AO scales

Unlike traditional blockchains, AO is designed for large-scale execution with:

- **Parallel Processing** – Processes run simultaneously, avoiding bottlenecks.
- **Unlimited Computation** – No cap on size or complexity; users pay only for what they use.
- **Autonomous Execution** – Processes can schedule tasks and operate independently.

## How message passing works on AO

AO uses a fundamentally different approach to sending transactions. Instead of relying on shared memory, smart contracts on AO operate as independent, asynchronous [processes](https://cookbook_ao.g8way.io/concepts/processes.html).

- Each contract runs independently and communicates with others by sending [messages](https://cookbook_ao.g8way.io/concepts/messages.html).
- These messages are stored permanently and verifiably on Arweave, ensuring security and transparency.

This design removes the need for a global memory space where processes compete for access, effectively eliminating lock contention.

[→ Learn more about AO message passing](article/ao-message-passing-explained.md)

## What can I do now on AO?

For builders, there is a wealth of resources available for building on AO. Check out the [AO Cookbook](https://cookbook_ao.arweave.net/) for step-by-step guides on how to build with the hyper-parallel computer. Visit the [Learn](learn.md) page to see the full ecosystem developer resources.

For users, the [permaweb](permaweb.md) ecosystem is growing with DeFi, gaming, content creation applications, and more. Visit the [Explore](explore.md) page to see the full ecosystem.

If you’re looking to dive deeper into the permaweb, check out the [Permaweb Index](article/permaweb-index.md) to learn about a novel funding mechanism for the ecosystem. Builders can generate funding by fair launching a token, and users can support projects by contributing yield-bearing assets in exchange for project tokens. Please note that the Permaweb Index is a permissionless mechanism, so be sure to do your own research. This is not financial advice.

## Resources

**AO**

- [Website](https://ao.arweave.net/)
- [AO Cookbook](https://cookbook_ao.arweave.net/)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
- [X](https://x.com/aoTheComputer)

**Further reading**

- [AO core components](ao-core-components.md)
- [AO Tokenomics](ao-economics.md)
- [How to allocate AO yield](article/ao-yield.md)
