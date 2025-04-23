---
title: "HyperBEAM: Everything you need to know"
description: HyperBEAM is the client implementation of AO Core, powering verifiable, message-based computation for scalable and permanent apps on the permaweb.
permalink:
tags:
---

![Permaweb Header](/static/images/hyperbeam-overview-header.png)

## I. Introduction

HyperBEAM is the reference client for the [AO-Core](ao-core-deepdive.md) protocol. Built in Erlang, it serves as the node software that powers decentralized computation across the permaweb. Unlike traditional blockchain nodes, HyperBEAM is designed around message-passing and modular devices rather than global consensus.

It executes AO programs by interpreting and composing messages over HTTP, enabling verifiable and scalable onchain compute.

[→ View the GitHub repo](https://github.com/permaweb/HyperBEAM)

## II. What is HyperBEAM?

![Permaweb Header](/static/images/hyperbeam-slim-header.png)

HyperBEAM is a lightweight, parallel runtime for AO. It runs on [Erlang’s BEAM VM](<https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)>) and enables developers to:

- Serve and execute [AO messages](ao-message-passing-explained.md) over HTTP
- Run modular devices as computation units
- Operate without centralized APIs or traditional RPCs
- [Interact with Arweave](fetching-arweave-data-in-ao.md) as a persistent storage backend

Each HyperBEAM node can be configured with different devices, metering systems, and pricing models, allowing anyone to spin up a custom compute environment.

[→ Setup and test a node](https://permaweb.github.io/HyperBEAM/hyperbeam/setup/)

## III. What is AO-Core?

[AO-Core](ao-core-deepdive.md) is a decentralized computation protocol built around the concept of **hashpaths**, which are Merkle-like chains that represent deterministic message execution.

Key benefits of AO-Core:

- Hashpaths create verifiable, on-chain state history
- Any program output can be referenced by its path
- All computation is expressed as HTTP messages
- Compatible with permanent storage via Arweave

## IV. How devices work in HyperBEAM

### What is a device?

Devices are modules that define how messages are interpreted or executed. Each device is an Erlang module prefixed with **dev\_ (e.g., dev_scheduler, dev_stack)**. When a message is sent to a path like **/your-id~process@1.0/now**, HyperBEAM loads the corresponding device and resolves the key (now) using that device’s logic.

### Device architecture in AO

AO devices are modular execution units that can be mixed, matched, or upgraded over time. Not every node needs to run every device. Some nodes may specialize in compute-heavy devices like **~wasm64@1.0**, while others may focus on message relaying or scheduling. Devices often work together to process messages, executing logic, routing state, or coordinating processes. This architecture ensures scalability, flexibility, and extensibility across the network.

Devices are not fixed; they can be added or upgraded. Each node can choose which devices to support based on hardware or specific use cases. This flexibility enables nodes to contribute compute or storage in ways best suited to their resources.

Devices can handle many roles:

- Some execute code (e.g. **~wasm64@1.0**)
- Others relay or store messages
- Some schedule tasks or validate computation

This diversity allows AO to scale without enforcing a single compute model.

### Device execution flow

1. HyperBEAM receives a message with a specified device
2. It finds the function associated with the requested key
3. The function runs and returns a new message result

These functions follow a standard structure:

- Input: (StateMessage, InputMessage, Environment)
- Output: {Status, NewMessage}

### Device metadata

Devices can expose an info function, which returns:

- Supported keys
- Default handlers
- Required environment variables

This metadata helps HyperBEAM optimize how messages are routed and executed.

[→ How to build a custom HyperBEAM device](https://mirror.xyz/0xE84A501212d68Ec386CAdAA91AF70D8dAF795C72/iLNw4j49tiB7XUE6EUayuFXUvdXnG-USTUBjK0HUH9c)

## V. The stack device

The **~stack@1.0** device allows a single message to be processed by multiple devices in sequence. It creates a stack of execution layers, each applying its own transformation to the message.

This is useful for building complex logic using smaller building blocks. For example, an AO process might first validate inputs with one device, then execute logic in another, then format the result with a third.

By stacking devices, developers can build modular, composable compute flows without writing monolithic programs.

## VI. Preloaded devices in HyperBEAM

HyperBEAM ships with over 20 devices. Here are some of the most common:

- **~meta@1.0** — Configures node identity, ports, and device list
- **~relay@1.0** — Handles cross-node message transport
- **~process@1.0** — Enables persistent, multi-user programs
- **~wasm64@1.0** — Executes WASM using WAMR runtime
- **~json-iface@1.0** — Translates JSON-based AOS 2.0 messages
- **~snp@1.0** — Provides TEE (Trusted Execution Environment) proofs
- **~stack@1.0** — Enables device composition and pipelining
- **~simple-pay@1.0** — Implements flat-fee pricing logic
- **~p4@1.0** — Resells hardware compute cycles with pricing and ledger hooks
- **~compute-lite@1.0** — Runs legacy AO processes from CU-based legacynet

Each device is modular and can be replaced, extended, or composed to build custom compute environments.

[→ Setting up and selecting devices for HyperBEAM nodes](https://github.com/permaweb/HyperBEAM/blob/main/docs/setting-up-selecting-devices.md#setting-up-and-selecting-devices-for-hyperbeam-node)

## VII. Developer resources

See the open source repo and supporting developer docs below.

- [GitHub Repo](https://github.com/permaweb/HyperBEAM)
- [AO Cookbook](https://cookbook_ao.arweave.net/)
- [HyperBEAM Reference Docs](https://permaweb.github.io/HyperBEAM/hyperbeam/)
- [HyperBEAM Demo](<https://odysee.com/@AO:4/2025.02.25_-_arweave_-_ao_node_workshop-(1080p):c?src=embed&t=2688.563113>)

## VIII. Conclusion

HyperBEAM is the foundation of decentralized compute in the AO ecosystem. It replaces centralized APIs, rigid virtual machines, and global consensus with a message-based execution model that runs over standard HTTP.

As the reference client for AO-Core, HyperBEAM allows developers to build applications where every interaction is verifiable, every process is modular, and all state is stored permanently on Arweave. It turns nodes into programmable endpoints that can run specialized logic through modular devices.

This approach scales more efficiently than traditional blockchains and introduces a new model for building and hosting web-native applications. Compute becomes permissionless, state becomes permanent, and every part of an application becomes transparent and reproducible.

Whether you are building [autonomous agents](https://www.autonomous.finance/research/en-US/dca-agent), running WASM programs, or exposing verifiable APIs backed by hashpaths, HyperBEAM is the engine that powers the next generation of onchain applications.

## Further reading

- [AO-Core Overview](ao-core-deepdive.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
- [How message passing work on AO](ao-message-passing-explained.md)
