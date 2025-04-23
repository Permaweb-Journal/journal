---
title: Arweave Mining - How Storage Is Secured Permanently
description: How Arweave mining secures permanent data.
permalink: 
tags:
---

Mining on the Arweave network is designed to ensure that data stored on the network is replicated as widely as possible. Here’s a breakdown from a high level perspective. If you would like to start mining, see the mining documentation [here](https://docs.arweave.org/info/mining/mining-guide).

## What Is Mining on Arweave?

Mining on Arweave involves helping maintain the network by storing data and creating new blocks. Instead of focusing only on computing power like traditional mining systems (e.g., Bitcoin), Arweave rewards miners for both computational effort and the amount of data they store.

### How Mining Works

1. **Random Data Challenge:** Miners are challenged to prove they can access specific pieces of data (called a “challenge byte”) stored on the network.
2. **Proof of Access ([SPoRA](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-103.md)):** To pass the challenge, miners must retrieve and verify the required data from their storage.
3. **Block Creation:** Miners use the verified data to create a block and submit it to the network. The block is only accepted if it meets the network’s difficulty requirements.

## Incentives for Miners

- **Wide Data Replication:** Miners are rewarded for storing more data. The more data you store, the higher your chances of successfully completing challenges and earning rewards.
- **Rare Data Storage:** The network prioritizes less-replicated data, encouraging miners to store data that isn’t widely available. This ensures a balanced and well-replicated dataset across the network.
- **Sacrifice Mining:** Some miners may choose to commit unique data that only they store, which can increase their chances of earning rewards.

### Why Is This Important?

This approach ensures Arweave’s network remains highly decentralized and economically secure. It incentivizes miners to store data reliably and replicate it widely, making the stored information more accessible and resilient over time.

By combining innovative mining mechanisms with sustainable incentives, Arweave’s design supports its mission of providing **permanent and decentralized data storage**.
