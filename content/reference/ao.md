---
title: AO 101
description: 
permalink: 
tags:
---
AO is a “hyper-parallel computer” designed to provide secure and scalable computing power. AO combines the reliability of blockchain technology with the efficiency and speed of traditional cloud services. Think of it as a cloud computing platform where scale and decentralization meet, with no limits to size or capacity.

Curious about how it all works? Let’s break it down step by step.

## How Does AO Work?

At the heart of AO is the concept of **processes**, which are independent programs running on the network. These processes communicate by sending and receiving **messages**, creating a seamless flow of interactions across the system. This architecture is powered by Arweave, which serves as the permanent storage layer for all data and interactions.

This combination allows AO to deliver:

- **Parallel Processing:** Tasks run independently and simultaneously, enabling massive scalability without bottlenecks.
- **Unlimited Computation:** There’s no cap on the size of data or computation, users pay only for what they use.
- **Autonomous Functionality:** AO processes can execute tasks automatically, such as at scheduled intervals.

## Core Components of AO

To understand how AO operates, let’s explore its essential building blocks:

### Processes

A process in AO is like a self-contained program that persists indefinitely. Each process maintains a "holographic state" which is a complete record of its activity stored as a log of messages on Arweave. This ensures transparency, auditability, and security.

### Messages

Every interaction in AO whether initiated by a user or another process is represented as a **message**. These messages:

- Adhere to the ANS-104 standard for interoperability.
- Are permanently stored on Arweave for transparency and verification.
- Enable seamless communication between processes without creating bottlenecks.

Learn more about how [message passing](ao-message-passing.md) on AO works.

### Messenger Units (MUs)

MUs play a vital role in keeping AO’s messaging system running smoothly. They:

- Relay messages between processes through a procedure called "cranking."
- Coordinate message routing and handle recursive interactions efficiently.
- Manage subscriptions and schedule tasks, providing flexibility for users and developers.

By ensuring messages flow seamlessly, MUs help maintain AO’s high-performance communication framework.

### Compute Units (CUs)

CUs handle the computational workload in AO. When a process needs its state updated or complex calculations performed, CUs step in. They:

- Compete in a market to offer efficient computation at the best price.
- Deliver signed attestations of results, ensuring accuracy and trust.
- Provide additional services like verifying other nodes’ computations for a fee.

CUs ensure AO remains efficient and competitive, even as demand grows.

### Scheduler Units (SUs)

Scheduler Units oversee the order and integrity of messages in AO processes. When a message is received, SUs:

- Assign a unique, incremental nonce to maintain message order.
- Sign the message and persist it to Arweave for immutability.

This ensures that all interactions remain consistent, secure, and reliable.


## Resources
**AO**
- [Website](https://ao.arweave.net/)
- [AO Cookbook](https://cookbook_ao.arweave.net/) 
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
- [X](https://x.com/aoTheComputer)

  

**Related Articles**
- [AO Tokenomics](ao-economics.md)
- [Message passing](ao-message-passing.md)