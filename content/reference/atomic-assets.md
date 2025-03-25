---
title: Atomic Assets
description: 
permalink: 
tags:
---
Atomic Assets are unique digital items stored on the permaweb, designed to simplify the ownership and transfer of digital assets while ensuring security and permanence. Unlike traditional NFTs, the data of an atomic asset—its metadata and smart contract—are uploaded together in a single, inseparable transaction. This eliminates reliance on external components, unlike other blockchains where these elements are often stored separately and linked by the smart contract.

Atomic Assets can represent anything from art, music, and videos to applications, domain names, or memberships.

## How Do Atomic Assets Work?

An Atomic Asset consists of the following components:

1. AO Token Process

   - Atomic assets are defined as AO processes that adhere to the [AO Token Blueprint](https://cookbook_ao.arweave.net/guides/aos/blueprints/token.html))This ensures compliance with standards for token creation, transfer, and ownership management.

2. Metadata

   - Metadata describes the asset and follows the [ANS-110 Standard](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-110.md). Required metadata includes:
     - **Name**: The asset's name.
     - **Ticker**: A unique identifier for the asset.
     - **Denomination**: The smallest divisible unit of the asset.
     - **Creator**: The asset's creator.
     - **Collection**: (Optional) The Collection ID if the asset belongs to a group.

3. **Transferibility**

   - Assets may optionally be non-transferable, in which case only the creator or AO system can modify their state.

4. Data
   - Atomic Assets include the actual data they represent (e.g., digital artwork, application code, or metadata) within their transaction.

## Use Cases

1. **Digital Art**:  
   Represent and trade unique pieces of digital artwork with embedded metadata.
2. **Tokenized Applications**:  
   Create tokens tied to software or application processes.
3. **Memberships**:  
   Use Atomic Assets as non-transferable membership tokens with specific privileges.
4. **Domain Names**:  
   Tokenize and manage ownership of decentralized domain names.

By integrating metadata, tokenization, and state management into a unified framework, Atomic Assets offer a robust and scalable solution for representing and managing digital items within the AO/Arweave ecosystem. This specification ensures interoperability and permanence, creating a reliable foundation for developers and users.
