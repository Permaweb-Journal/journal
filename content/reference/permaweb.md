---
title: Permaweb Guide
description: 
permalink: 
tags:
---
The **permaweb** is a permanent and decentralized web built on top of Arweave. The original vision of the traditional web was to create an accessible repository of human knowledge. While it has been largely successful, a critical flaw remains: the web lacks permanence. When documents are removed from a server, they are lost to the collective knowledge base. Similarly, applications that once operated on the web become inaccessible when their developers or maintainers alter or remove them.

Arweave addresses this issue with the permaweb, which can host fully decentralized web applications. These applications operate independently within the permaweb, governed solely by their own code. No individual or authority can oversee or alter them once launched. A permaweb application is immutable, universally accessible, and requires no ongoing maintenance or upkeep from the original developer to remain functional.

The permaweb provides a comprehensive stack for building and running these applications:

- [Arweave](arweave.md) : The core system that ensures data replication and availability through a decentralized, sustainable endowment.
- [Gateways](gateways.md): Content delivery servers with diverse business models and incentives (e.g., arweave.net, ar.io, g8way.io, and aoweave.tech).
- [GraphQL](https://cookbook.arweave.net/guides/querying-arweave/queryingArweave.html): A querying system offered by gateways, enabling seamless interaction with the network’s data. Developers can use GraphQL to search posts by users, filter data by tags or timestamps, and more, much like traditional web applications.
- [AO](ao.md): A hyper-parallel computational layer that provides a unified environment for decentralized applications and processes.

## The Composable Web

On the traditional web, data is often locked within specific applications, creating isolated “data silos.” In contrast, permaweb applications share access to Arweave’s robust data lake, enabling **composable applications**—apps that can seamlessly leverage and build on each other’s data. 

Permaweb apps can be built on open protocols such as **Stamps** (a universal “like” button), **Vouch** (proof of humanity), and the **Universal Content Marketplace** (a decentralized order book), among others.

## More User Control

With the [Universal Data License (UDL)](udl.md), users can programmatically define within [Atomic Assets](atomic-assets.md) how their data can be accessed and used by applications. [Zones](zones.md) serve as an additional abstraction layer, storing information such as composable user profiles. This ensures that user rights are respected while providing developers with clear, equitable guidelines for building on existing content. The permaweb fosters a more open, collaborative, and fair ecosystem for both users and developers.”