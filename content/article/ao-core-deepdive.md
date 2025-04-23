---
title: "AO-Core: Everything you need to know"
description: Explore how AO-Core powers scalable, verifiable compute.
permalink: 
tags:
---

![Permaweb Header](/static/images/ao-core-header.png)

## I. Introduction

[AO-Core](https://x.com/aoTheComputer/status/1888367204523000259) is a decentralized computation protocol designed to bring verifiability, modularity, and scalability to the [permaweb](reference/permaweb.md). Rather than forcing computation through a monolithic virtual machine or consensus mechanism, AO-Core defines a low-level execution model using composable messages, cryptographic hashpaths, and standard web protocols.

By embedding blockchain-grade assurances directly into the HTTP layer, AO-Core enables developers to build reactive, verifiable systems that anyone can inspect, attest to, and extend. It creates a new execution layer for the web, one based on hash-linked logic and distributed state.

## II. What is AO-Core?

At its core, AO-Core is a protocol that transforms HTTP into a programmable substrate. Every piece of data becomes a message. Messages can be composed, executed, and verified. Hashpaths act as cryptographic proofs of correctness. Devices, lightweight interpreter modules such as `~process@1.0` or `~stack@1.0`, define how messages are read, transformed, or combined.

Instead of enforcing a single virtual machine, AO-Core acts as a meta-VM. Developers can define their own execution logic and validation mechanisms by combining messages and devices. This modular approach supports a wide range of compute models, from TEEs to WASM to ZKPs.

## III. Why hashpaths matter

Hashpaths are cryptographic representations of interaction sequences. Each computation step is represented as a transformation from one message to another, and the resulting hashpath links the current state to the full trace of inputs that produced it.

This mechanism allows verifiable execution across distributed systems. Nodes don’t need to re-execute a computation to validate it. Instead, they verify the hashpath, a Merkle-style proof that ensures correctness, reproducibility, and composability. Hashpaths are foundational to AO-Core's design, forming a decentralized consensus model based on reproducibility rather than coordination.

Below is an example of how hashpaths as messages would work for a financial transaction.
![Hashpaths Example](/static/images/hashpath.png)

## IV. Verifiability through HTTP

AO-Core turns standard HTTP requests into verifiable computation steps. Each message includes structured headers, optionally signed using [HTTP Message Signatures (RFC 9421)](https://datatracker.ietf.org/doc/html/rfc9421). Every URL becomes a pointer to a computation. Each path segment represents a function call or message transformation.

Because AO-Core aligns with HTTP semantics, developers can use browsers, curl, or proxies to interact with the system. Results are signed and can be cached or redirected, giving the network global addressability with local verifiability. The result is a cryptographically sound compute layer accessible with standard web tools.

## V. Execution without global consensus

Traditional blockchains require all nodes to agree on every computation. AO-Core takes a different route. Consensus is replaced by local attestation and hashpath validation.

Nodes compute what they need and sign the results. If another node wants to validate the output, it verifies the hashpath. This approach scales horizontally. There are no synchronized rounds, just verifiable outputs. This emergent model of consensus is sometimes referred to as, "fuzzy-head consensus," computation verified only when it matters.

## VI. Flexible execution environments

Computation in AO-Core is handled by devices. Each device defines how to interpret and apply a message. Developers can:

- Run WASM programs using `~wasm64@1.0`
- Use shared processes with `~process@1.0`
- Bridge JSON and HTTP APIs with `~json-iface@1.0`
- [Run hardware-verified execution in TEEs with `~snp@1.0`](https://mirror.xyz/0xE84A501212d68Ec386CAdAA91AF70D8dAF795C72/8DH98NsNmM5vCR5W6erf4-BhYLgk5McvOinCHzlSLzY)
- Integrate zero-knowledge proofs for privacy-preserving logic

The modular device model allows developers to define their own execution stack, choosing trust models and performance tradeoffs suited to their application. See the full list of supported devices [here](https://github.com/permaweb/HyperBEAM).

[Learn how to build a custom device on HyperBEAM.](https://mirror.xyz/0xE84A501212d68Ec386CAdAA91AF70D8dAF795C72/iLNw4j49tiB7XUE6EUayuFXUvdXnG-USTUBjK0HUH9c).

## VII. Developer experience

AO-Core was built for developers who know how to work with the web. You can write programs in [Lua](https://cookbook_ao.arweave.net/concepts/lua.html) or [WASM](https://cookbook_ao.arweave.net/references/wasm.html), send messages with HTTP, verify outputs via headers, and compose systems using URLs.

There are no custom clients or SDKs required. You build with native protocols and inherit cryptographic security guarantees by default. This unlocks a new way to develop decentralized applications that are modular, inspectable, and permanent.

See the [Learn](learn.md) page for more AO resources.

## VIII. Conclusion

AO-Core redefines decentralized computation. Instead of emulating a global computer, it builds a permissionless execution fabric composed of messages, devices, and verifiable hashpaths. Computation becomes addressable and inspectable. Every URL is a program. Every result can be proven.

This is a system for developers who want to build applications that are open, modular, and cryptographically sound by default. AO-Core is the foundation of a new web-native compute layer.

## References

- https://permaweb.github.io/HyperBEAM/
- https://github.com/permaweb/HyperBEAM
- https://x.com/aoTheComputer/status/1888367204523000259

## Further reading

- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)
- [How AO processes fetch Arweave data with assignments](fetching-arweave-data-in-ao.md)
- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
