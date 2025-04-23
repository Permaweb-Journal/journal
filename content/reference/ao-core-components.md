---
title: AO core components
description: An overview of AO’s modular compute architecture.
permalink: 
tags:
---
## Processes
A process in AO is like a self-contained program that persists indefinitely. Each process maintains a "holographic state" which is a complete record of its activity stored as a log of messages on Arweave. This ensures transparency, auditability, and security.

[→ Technical details about AO processes](https://cookbook_ao.arweave.net/concepts/processes.html)
## Messages
Every interaction in AO whether initiated by a user or another process is represented as a **message**. These messages:
- Adhere to the ANS-104 standard for interoperability.
- Are permanently stored on Arweave for transparency and verification.
- Enable seamless communication between processes without creating bottlenecks.

[→ Technical details about AO messages](https://cookbook_ao.arweave.net/concepts/messages.html)

## Messenger Units (MUs)
MUs play a vital role in keeping AO’s messaging system running smoothly. They:
- Relay messages between processes through a procedure called "cranking."
- Coordinate message routing and handle recursive interactions efficiently.
- Manage subscriptions and schedule tasks, providing flexibility for users and developers.

By ensuring messages flow seamlessly, MUs help maintain AO’s high-performance communication framework.

## Compute Units (CUs)

CUs handle the computational workload in AO. When a process needs its state updated or complex calculations performed, CUs step in. They:
- Compete in a market to offer efficient computation at the best price.
- Deliver signed attestations of results, ensuring accuracy and trust.
- Provide additional services like verifying other nodes’ computations for a fee.
CUs ensure AO remains efficient and competitive, even as demand grows.
## Scheduler Units (SUs)

Scheduler Units oversee the order and integrity of messages in AO processes. When a message is received, SUs:
- Assign a unique, incremental nonce to maintain message order.
- Sign the message and persist it to Arweave for immutability.
This ensures that all interactions remain consistent, secure, and reliable.


[→ Technical details about AO Units](https://cookbook_ao.arweave.net/concepts/units.html)



## Resources

**AO**
- [Website](https://ao.arweave.net/)
- [AO Cookbook](https://cookbook_ao.arweave.net/)
- [Mirror](https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840)
- [X](https://x.com/aoTheComputer)

**Further reading**
- [AO 101](ao.md)
- [AO Tokenomics](ao-economics.md)
- [How to allocate AO yield](article/ao-yield.md)
