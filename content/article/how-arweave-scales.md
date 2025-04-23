---
title: How Arweave scales (and why that matters for AO)
description: How Arweave achieves permanent storage at scale.
permalink: 
tags:
---

![Permaweb Header](/static/images/arweave-scales-header.png)

## I. Introduction

Arweave is becoming the backbone of decentralized infrastructure across multiple domains: blockchains, oracles, and now compute. The combination of scalable economics, recursive bundling, and a holographic data model makes Arweave not only efficient but increasingly deflationary. This post takes a deeper technical look at why Arweave scales, how it economically sustains itself, and what that means for the growth of AO and the broader permaweb.

## II. Pay once, store forever

Arweave differs from contract-based storage networks in one critical way: it enforces a **single global rule** for all transactions: pay once, store forever. This design eliminates the need for per-transaction adjudication.

On contract-based platforms, each storage request must specify a term (e.g., 1 year, 3 years), number of replicas, and specific terms of service. This introduces complexity and computational overhead. As the number of contracts increases, so does the burden on the network.

In contrast, Arweave’s global dataset is modeled as an **immutable data lake**, composed of 256KB chunks organized into a single Merkle tree. All uploads, regardless of who submits them or their content, are treated uniformly. This enables efficient indexing, retrieval, and proof-of-storage validation for miners without requiring smart contract-level logic.

See the [Arweave Fees Calculator](https://ar-fees.arweave.net/) for an approximate real-time cost to store data permanently:

![AR Fees](/static/images/ar-fees.png)

**ArFleet: Temporary storage on the permaweb**

The ecosystem also supports temporary storage through ArFleet, which lets users choose between long-term preservation and time-limited storage options. This adds flexibility to decentralized data management.

Check out ArFleet [here](https://arfleet.arweave.net/).

## III. Bundled uploads

Arweave blocks support a maximum of 1,000 transactions every ~2 minutes. At face value, this sounds like a scalability bottleneck, but it isn’t.

Arweave supports **recursive transaction bundling** via the [ANS-104](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md) standard:

- A single Arweave transaction (bundle) can contain **millions of sub-transactions**
- Bundles can be **nested** to arbitrary depth
- Each bundle is **settled with a single payment** and appears as one transaction on-chain

Thanks to bundled data, Arweave scales without the need for a fee market.

[Learn more about bundling uploads with Turbo created by AR.IO](https://docs.ardrive.io/docs/turbo/what-is-turbo.html).

<div class="tweet-container">
  <img src="https://ywf3l7fxjxdjsdyrpm3i773v44vpapkhrlel2n2323n5myhicqsa.arweave.net/xYu1_LdNxpkPEXs2j_915yrwPUeKyL03W9bb1mDoFCQ" alt="Tweet screenshot"></div>
  
## IV. Economic sustainability

Arweave uses a novel economic structure to fund over 200 years of future storage. Each data upload pays a one-time fee, which is split as follows:

- A portion goes to miners immediately
- The rest enters the **storage endowment**, which pays miners over time for continued data availability

This ensures:

- Miners are continuously incentivized to store data
- Uploaded data remains accessible long after it’s paid for
- The network avoids expiring storage terms or subscriptions

<div class="tweet-container">
  <a href="https://x.com/allquantor/status/1901747821277044951">
    <img src="/static/images/fees-tweet.png" alt="Arweave Fees">
  </a>
</div>

Arweave’s transaction fees are hard to fake. Unlike inflated volume or TPS metrics, fees represent actual payment. They are the most honest signal of usage. And because >99% of all fees go to the endowment, they are effectively removed from circulation, making AR structurally deflationary.

[Learn more about Arweave's endowment](storage-endowment-explained.md).

## V. Integration with other chains and protocols

Arweave is becoming the **data layer** for many Layer 1s:

- Celestia, dYdX, Moonbeam, Noble use Arweave to store chain history
- Ethereum and Solana blocks are archived via KYVE and other indexers
- Oracles like RedStone post tens of millions of price updates per day to Arweave

Below is a screenshot of [KYVE storage pools](https://app.kyve.network/#/pools) using ARIO to bundle data to Arweave:
![Kyve storage pools](/static/images/kyve.png)

This is possible because:

- Arweave offers **low-cost permanent storage**
- Uploads can be paid in **fiat or other cryptocurrencies** via [AR.IO](https://x.com/ar_io_network)
- Gateways and bundlers provide robust APIs for data read/write

Arweave scales **both technically and economically** to meet the needs of high-throughput ecosystems.

## VI. How Arweave creates AO’s holographic state

Every message and process on AO is stored permanently on Arweave. This enables what AO calls **holographic state**.

**What Is Holographic State?**

Rather than reaching consensus on a global state, AO stores a permanent log of messages and state transitions on Arweave. These logs form a **hologram of state**, allowing anyone to recompute state outputs from any point in history.

- Ensures determinism and auditability
- Enables AO processes to react to timed or implied messages
- Removes reliance on shared global execution

This model is what allows **legacynet processes to migrate to HyperBEAM** without friction, they’re already stored on Arweave, and now have access to faster, decentralized mainnet compute.

[Learn more about the latest HyperBEAM update](hyperbeam-milestone-3.md).

## VII. Arweave and AO: Two sides of the same coin

Arweave and AO are technically and economically related:

- **Arweave benefits** from high transaction volume and sustained miner incentives
- **AO benefits** from a permanent, scalable storage layer and mature data infrastructure

This creates:

- **Deflationary tokenomics** as more AR is locked into the endowment
- **Sustainable infrastructure** built on real usage, not speculation
- **Composable compute + storage**, unified under a single model

Where Ethereum’s L2s siphon value from the base layer, AO **anchors all its activity to Arweave**, directly increasing network usage and economic throughput.

Last month, AO accounted for **one-third of all Arweave transactions**:

![Arweave uploads](/static/images/arweave-tx.png)

**Permaweb Index (PI)**

For a deeper dive into how Arweave and AO are economically linked, check out the Permaweb Index (PI) which is an financial index that offers broad exposure to the entire ecosystem without requiring active management (33.3% AR, 33.3% AO, 33.3% Fair launch projects).

[Learn more about PI](permaweb-index.md).

## VIII. Conclusion

Arweave solves decentralized storage by making permanence a primitive. Its architecture eliminates fee markets, compresses global state into a unified data lake, and unlocks infinite scalability through recursive bundling. With each new transaction, its endowment model pushes AR further out of circulation, creating a deflationary feedback loop tied to real demand, not speculation.

AO builds on this foundation by introducing decentralized compute. Every AO message, state transition, and process lives permanently on Arweave. Computation is not only verifiable but reproducible, thanks to a holographic state model that replaces consensus with traceable message logs and hash-linked proofs. The result is a supercomputer without a global bottleneck, scalable, autonomous, and permissionless by design.

**Arweave is the permanent hard drive. AO is the permanent CPU. Together they make up the Permaweb.**

## Further reading

- [Arweave](reference/arweave.md)
- [Storage endowment](storage-endowment-explained.md)

## Resources

- https://viewblock.io/arweave
- https://stats.dataos.so/arweave
- https://arwiki.arweave.net/#/en/How-Arweave-Scales

---

This is not financial advice. Please do your own research.
