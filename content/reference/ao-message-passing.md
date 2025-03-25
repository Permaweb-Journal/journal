---
title: How Message Passing Works in AO
description: 
permalink: 
tags:
---
In computer science, there are two common approaches to parallel execution: shared memory and message passing. While most blockchains rely on shared memory, AO adopts an innovative approach through message passing, unlocking unparalleled scalability and efficiency. Let’s break down how this works and why it matters.

## Shared Memory

Blockchains that use shared memory allow all smart contracts to access the same memory space. This means contracts can read and write data directly, which simplifies certain operations. However, this design comes with a critical limitation: **lock contention**.

Lock contention occurs when multiple users try to access and modify the same data at the same time. To avoid conflicts, users must take turns. For example, Alice locks the data, makes her changes, and then unlocks it. Only after Alice is done can Bob access and modify the data. This creates a queue, which works well at a small scale but becomes a bottleneck as usage grows. Even highly optimized shared memory systems, like Solana, face scalability limits due to lock contention.

## Message Passing on AO

AO takes a different approach. Instead of relying on shared memory, smart contracts in AO operate as independent, asynchronous processes. Each contract runs on its own, sending messages to other processes when interaction is needed. These messages are permanently stored and verifiable on Arweave, ensuring security and transparency.

In this architecture, there is no need for a global memory space that all processes compete to access. This eliminates lock contention entirely. Each process runs at the speed of a single CPU thread, and when a process becomes too busy, you can simply split it into multiple processes to handle the workload. This is known as **horizontal scaling**.

#### Why Message Passing Scales Better

Message passing enables AO to achieve what’s called "infinite scalability." The number of processes can grow alongside the number of users and applications without introducing bottlenecks. This is fundamentally different from shared memory systems, where increasing demand eventually leads to slower performance.

With AO, more processes mean higher throughput and more capacity for users and applications. The system’s only theoretical limit is inherited from Arweave: 2^256 bytes—a number so large it’s far beyond the scale of any conceivable application.

#### Trade-Offs and Benefits

The main trade-off of message passing is that processes don’t have instantaneous access to a shared global memory. Instead, they must “ask” for information from other processes via messages. While this adds a layer of complexity, AO’s tools make these interactions seamless and efficient.

The benefits of this architecture far outweigh the trade-offs:

1. **No Lock Contention:** Users and applications can interact with the network simultaneously without waiting in line.
2. **Unlimited Scalability:** The system can grow to support any number of users and processes.
3. **Versatility:** The architecture can handle anything from AI computations to financial transactions without processes interfering with one another.
4. **Enabled by Arweave:** AO’s reliance on Arweave ensures that messages and data are stored securely and permanently, enabling a foundation for infinite on-chain interactions.
