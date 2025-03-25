---
title: Universal Content Marketplace (UCM)
description: The Universal Content Marketplace (UCM) is a protocol on the permaweb designed for the trustless exchange of atomic assets.
permalink: 
tags:
---

The **Universal Content Marketplace (UCM)** is a protocol on the permaweb designed for the **trustless exchange of atomic assets**. It enables creators and users to trade digital content, including images, music, videos, papers, components, and applications.

## How the UCM works

The UCM processes transactions by accepting deposits from buyers or sellers and fulfilling orders based on the specified swap pair, quantity, and, if applicable, price. Here’s how an order is executed:

1. A user deposits (transfers) tokens to the UCM, including additional tags in the **Transfer Message**. These tags are forwarded to the UCM process to create the order.
2. The token process issues a **Credit-Notice** to the UCM and a **Debit-Notice** to the user.
3. The **Credit-Notice Handler** verifies that all required tags are present before creating the order.
4. The UCM submits the order to the order book, using the forwarded tags to define the swap pair, token quantity, and price (for limit orders).

A key feature of UCM is its incentive mechanism through **PIXL**, a rewards token. Users earn [PIXL](https://bazar.arweave.net/#/asset/DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo) by maintaining **buying streaks** - purchasing atomic assets on consecutive days.

**Core Functionality**

- **Powered by AO** – The UCM operates on AO, a hyper-parallel computing system built on Arweave. AO provides a unified environment for executing decentralized applications and processes.
- **Trustless Transactions** – Eliminates third-party intermediaries in digital asset exchanges.
- **Licensable Data** – The [Universal Data License (UDL)](https://udlicense.arweave.net/) ensures that value flows equitably to creators and contributors. Creators can set their own terms for content usage. Learn more about UDL [here](https://ao-bazar.arweave.net/#/docs/creators/universal-data-license).
- **Earn $PIXL Rewards** – Users who maintain buying streaks earn PIXL rewards. The longer the streak, the greater the daily reward. Learn more about earning PIXL [here](https://ao-bazar.arweave.net/#/docs/collectors/earn-pixl).

## UCM Fees

The UCM captures a **0.5% fee** per transaction. If the trade involves **$wAR tokens**, the fee is used to purchase PIXL tokens through the following process:

1. The contract buys available PIXL sell orders.
2. Purchased PIXL tokens are **burned**, reducing the overall supply.

Higher trading volumes increase buy pressure on PIXL, enhancing scarcity over time.

## Resources

- [UCM Source Code](https://github.com/permaweb/ao-ucm)
- [Bazar (UCM UI)](https://bazar.arweave.net/#/)

## Related Articles

- [Permaweb](permaweb.md)
- [Atomic Assets](atomic-assets.md)
- [Universal Data License](udl.md)
- [Vouch](vouch.md)
- [Zones](zones.md)
