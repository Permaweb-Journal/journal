---
title: How AO processes fetch Arweave data with assignments
description:
permalink:
tags:
---

![AO Process Header](/static/images/process-fetch.png)

## I. Introduction

The traditional web is ephemeral. APIs go down, links rot, and compute is detached from memory. AO and Arweave offer a solution to this.

AO is not a traditional layer-2. It's its own network that uses Arweave to store all messages and processes. This permanent data layer gives AO its holographic state. Arweave is the permanent hard drive to AO’s decentralized CPU-together, they make up the permaweb.

As a developer, you may want to access data from Arweave. This post explains how to do that.

We’ll walk through how to bridge the two-using **assignables**, **assignments**, and **handlers**-to let your AO process fetch and process data from the permaweb. For the full technical documentation see the [Accessing Arweave Data](https://cookbook_ao.arweave.net/references/data.html) page in the AO Cookbook.

## II. What are AO processes?

![AO Header](/static/images/ao-ar.png)

At the heart of AO is the [process](https://cookbook_ao.arweave.net/concepts/processes.html): a living, message passing compute unit that feels familiar to developers of smart contracts but operates in a fundamentally different way.

In Ethereum, a smart contract is a static piece of code that reacts to transactions. It runs deterministically, bound by the rules of the EVM, and doesn’t persist state between calls except through explicit storage.

In AO, a process is more like a persistent actor. It can:

- Maintain internal state
- Listen for and react to incoming messages
- Dispatch its own messages to other processes
- Spawn new processes from modules, dynamically

Where smart contracts are passive-only triggered by external transactions-processes are active participants in a network of computation. They can emit, receive, and respond to messages in a way that resembles concurrent programming more than blockchain scripting.

This is enabled by AO’s holographic state model: a global, decentralized state maintained by the network through message passing. Each process contributes to this state by reacting to events and producing side effects.

## III. How assignables work

Because AO processes are always listening, you need a way to define what they should listen for-especially when dealing with external data like Arweave transactions.

That’s where assignables come in.

Assignables act as the permissions layer of a process. They declare:

- What types of Arweave transactions the process will accept
- How those transactions should be filtered or tagged
- What data the process is willing to react to

Without an assignable, a process will reject an assigned transaction-even if the data is valid. This is a security and design feature: AO doesn’t let processes pull in arbitrary data from Arweave unless they’ve explicitly opted in.

This flips the typical “fetch” model on its head. You don’t query data ad hoc like in web2. Instead, you configure your process to accept a specific kind of permanent data, then wait for the network to deliver it.

### Step 1: Define what you’ll accept

Before fetching anything, you must define assignables. These are filters that tell your process what kind of Arweave transactions it’s allowed to receive.

```lua
-- Allow transactions from ArDrive
ao.addAssignable("allowArDrive", function (msg)
  return msg.Tags["App-Name"] == "ArDrive-App"
end)

-- Allow specific content types
ao.addAssignable("allowImages", function (msg)
  return msg.Tags["Content-Type"] and string.match(msg.Tags["Content-Type"], "^image/")
end)
```

Think of it as a firewall. Nothing gets through unless you define it. If you skip this step and try to fetch a transaction anyway, it gets **blacklisted permanently**.

### Step 2: Request the data

Once assignables are set, use `Assign()` to request a specific Arweave transaction by ID.

```lua
Assign({
  Processes = { ao.id },
  Message = 'your-arweave-tx-id'
})
```

This tells the network: send the contents of this transaction to your process-but only if it matches the rules you defined.

### Step 3: Handle the data

Once the data arrives, you can handle it either synchronously:

```lua
msg = Receive(function (msg)
  return msg.Tags["App-Name"] == "ArDrive-App"
end)
```

Or asynchronously using persistent handlers:

```lua
Handlers.add("ArDriveHandler", { Tags = { ["App-Name"] = "ArDrive-App" } }, function (msg)
  print(msg.Data)
end)
```

This makes your AO process reactive. It can "wake up" when a transaction arrives-without polling or manual intervention.

## IV. What this enables

![Permaweb](/static/images/permaweb.png)

This is more than fetching files from an API. It gives developers access to the Arweave network, with over 14 billion pieces of data uploaded from diverse resources including archives, oracles, other blockchains and more. Some examples:

- **Dynamic config loading**: Store logic, modules, or weights on Arweave. Update them without redeploying your AO process.
- **Lightweight agents**: Keep compute small and stateless, pull in data only when needed.
- **Governance-aware logic**: Fetch voting outcomes or token snapshots to inform onchain behavior.
- **Composable backends**: Treat Arweave as a public message bus. Fetch and react to any transaction in any protocol.

This pattern lets you build decentralized systems where state lives forever, but compute stays nimble.

## V. Why this is different from web2 APIs

In traditional development, APIs introduce a single point of failure. They can:

- Go offline without warning
- Change responses or break compatibility
- Require trust in centralized infrastructure
- Obscure the source and history of data

With AO + Arweave, data is permanent, verifiable, and built into the fabric of the network.

Here’s what makes this model radically different from a typical fetch call:

| Traditional fetch (web2)         | AO + Arweave assignment                   |
| -------------------------------- | ----------------------------------------- |
| Request data from an API         | Request data from a permanent transaction |
| Response can change or disappear | Response is immutable and verifiable      |
| You trust the server             | You trust the hash                        |
| Ephemeral                        | Permanent                                 |
| No protocol for who gets what    | Explicit permission model (assignables)   |

This isn’t about faster calls or cheaper storage. It’s a **different trust model**.

Fetching is faster due to parallel processing, and trustworthy because developers can ensure the provenance of data. You’re not asking a server to respond, instead you’re instructing the permaweb to deliver data your process has already declared it will accept.

## Conclusion

Most software polls, pulls, and refreshes. AO listens.

It waits for truth to arrive-not from an API or a database, but from the permaweb. You’re no longer fetching data from an untrusted third party. You’re computing directly on permanent data.

The ability to assign Arweave transactions to AO processes is a key building block for decentralized backends, agent-driven systems, and applications that can evolve forever without losing context.

To connect with the AO community, join the [AO Discord](https://discord.gg/dYXtHwc9dc) and [Follow AO the Computer on X](http://x.com/aoTheComputer) to get the latest updates.

## Further reading

- [Arweave](reference/arweave.md)
- [AO Permaweb Guide](ao-permaweb-guide.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [How message passing work on AO](ao-message-passing-explained.md)

## Resources

- [AO Cookbook](https://cookbook_ao.arweave.net/)
