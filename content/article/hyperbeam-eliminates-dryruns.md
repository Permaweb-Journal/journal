---
title: HyperBEAM eliminates the need for DryRuns
description: Learn how HyperBEAM removes the need for DryRuns in AO by enabling direct, verifiable access to process state via HTTP. A simpler, faster path to building on the permaweb.
permalink:
tags:
---

![Permaweb Header](/static/images/dryruns-header.png)

## I. Introduction

AO processes run on messages. Every interaction, whether it’s a balance check, a transfer, or spawning a new process, happens through [message passing](ao-message-passing-explained.md). Traditionally, if a developer wanted to “read” a message or fetch current state without making a permanent change, they would use a [DryRun](https://cookbook_ao.arweave.net/guides/aoconnect/calling-dryrun.html).

DryRuns simulate a message call without saving memory changes. They’re useful for reading process state or previewing outcomes. But as usage grew, DryRuns became a bottleneck, especially on legacynet. They spammed the network, clogged Compute Units (CUs), and added friction to the developer experience.

HyperBEAM changes this.

## II. What is HyperBEAM?

[HyperBEAM](https://github.com/permaweb/HyperBEAM) is the reference client for the [AO-Core](ao-core-deepdive) protocol, written in Erlang. It functions as the node software for the AO network and enables decentralized execution of AO processes. Think of it as the compute engine for the permaweb.

Rather than executing WebAssembly in isolation, HyperBEAM nodes run AO processes through message passing. Each node can register devices (such as ~wasm64@1.0, ~json-iface@1.0, or ~stack@1.0) and handle computation requests from the network. These devices allow nodes to interpret, execute, and respond to messages in a modular and extensible way.

HyperBEAM introduces key improvements:

- Scalable execution through Erlang concurrency
- Lazy evaluation for efficient message handling
- Extensible device support for trusted compute, WebAssembly, JSON interfacing, and more

**One of the biggest wins for developers: it eliminates the need for DryRuns.**

## III. Why DryRuns existed

Before HyperBEAM, if you wanted to check state on a process (for example, to get a token balance), you needed to simulate a message. That’s what a [DryRun](https://cookbook_ao.arweave.net/guides/aoconnect/calling-dryrun.html) was.

```
const result = await dryrun({
  process: 'PROCESSID',
  tags: [{ name: 'Action', value: 'Balance' }],
  anchor: '1234'
});
```

This call used the dryrun method from the [aoconnect SDK](https://cookbook_ao.arweave.net/guides/aoconnect/aoconnect.html). It simulated a message without updating memory, letting developers preview the output.

It worked, but it came at a cost. DryRuns added unnecessary traffic to the legacynet, putting pressure on compute nodes and slowing down the network.

## IV. How HyperBEAM replaces DryRuns

HyperBEAM treats all computation as messages. Since processes can update their state explicitly using PATCH messages, there’s no need for a separate DryRun simulation layer.

Instead of sending a simulated read call, you use a message to update a known part of the process’s state. Then you (or any client) can retrieve that value directly via HTTP.

Here’s an example handler that listens for updates and writes state using the patch@1.0 device:

```
Handlers.add('Update-State', { Action = 'Update-State' }, function(msg)
  if msg.From == ao.env.Process.Tags.AllowedSender then
    Send({ device = 'patch@1.0', cache = msg.Data })
    print('Updated State!')
  end
end)
```

Once this handler runs, the patched state becomes accessible through a direct HTTP request from any HyperBEAM node. For example:

```
https://tee-1.forward.computer/YOUR_STATE_PROCESS_ID~process@1.0/now/cache
```

This makes state publicly queryable, just like a REST API, but cryptographically signed and verifiable.

## V. Benefits to developers

- **Unified developer experience:** There’s only one way to interact with a process by sending messages.
- **Less network congestion:** DryRuns previously flooded the network. HyperBEAM removes that load.
- **Simpler mental model:** No special flows or exceptions. Everything is just a message.
- **Faster reads:** Processes can serve data efficiently, especially when combined with patch@1.0 and caching.

## VI. Conclusion

DryRuns were a necessary workaround on legacynet. HyperBEAM makes them obsolete.

App developers are already adopting this new pattern for reading state, replacing simulated calls with verifiable HTTP queries. As more projects implement this approach, expect improved developer workflows and smoother user experiences across permaweb apps.

Start exploring the new compute layer of the permaweb [here](explore.md).

## References

- https://permaweb.github.io/HyperBEAM/
- https://github.com/permaweb/HyperBEAM
- https://cookbook_ao.arweave.net/guides/aoconnect/calling-dryrun.html

## Further reading

- [HyperBEAM milestone 3 update](hyperbeam-milestone-3.md)
- [AO Core: Everything you need to know](ao-core-deepdive.md)
- [AO nomenclature explained](ao-nomenclature.md)
- [AO message passing explained](ao-message-passing-explained.md)
