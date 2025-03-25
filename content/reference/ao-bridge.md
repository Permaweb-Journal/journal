# AO Bridge

Learn how to bridge tokens into the AO token bridge and earn AO.

## How to Check Your AO Balance

The AO token mint for Arweave token holders has been applied retroactively from the launch of the AO testnet on February 27, 2024, at 12:00 AM UTC. Minting AO tokens from the start of the testnet ensures a sufficient float of tokens before they circulate, targeting approximately 15% of the total supply (3.15 million AO) by February 8, 2025.

If you have been holding $AR since the testnet launch, you have accrued approximately 0.016 AO tokens per AR as of June 13, 2024. Keep in mind that the current supply of AO is 1/65th of that of AR.

Major exchanges are currently evaluating how to distribute $AO to their users. Contact your exchange or custodian to confirm how they are handling this process.

If you have been self-custodying your $AR tokens, you can check your balance by visiting [ao.arweave.dev](https://ao.arweave.dev). Click the “Arweave” tab and connect your self-custodial wallet (such as ArConnect).

## Earn AO by Holding AR

New AO tokens are minted every 5 minutes. Before the launch of the pre-bridge on June 18, 2024, 100% of AO tokens were allocated to AR token holders. After the pre-bridge launch, 33% of AO tokens are allocated and divided proportionally among AR holders. Over time, approximately 36% of the total AO supply will be minted by AR holders.

The table below shows the approximate AO accrual for a given AR balance over the next 12 months:

- **1 AR:** 0.016 AO
- **10 AR:** 0.16 AO
- **50 AR:** 0.8 AO
- **100 AR:** 1.6 AO
- **500 AR:** 8.0 AO
- **1,000 AR:** 16.0 AO

The rate of AO minting decreases over time until all tokens are fully minted. AO tokens will become transferable around February 8, 2025.

## Pre-Bridge stETH and DAI

**Note: AO bridging rewards are not available to U.S. residents.**

During this initial phase, users can pre-bridge assets, **stETH** and **DAI** to accrue AO token rewards. Other proof-of-stake and stablecoin assets may be added as the ecosystem grows.

Pre-bridged assets will not be immediately usable in AO applications during this phase. However, once the phase 2 bridge is live, you will be able to use your pre-bridged assets in AO applications while continuing to earn AO token rewards.

When you pre-bridge your stETH or DAI:

- your original deposit remains in an [audited contract](https://etherscan.io/address/0xfE08D40Eee53d64936D3128838867c867602665c#code%23L1) on Ethereum. Native yield from stETH and DAI is divided among ecosystem organizations and builders to support growth. Initial beneficiaries include Open Access Supercomputing Foundation, Forward Research, Autonomous Finance, Warp Contracts, Longview Labs, and ao/acc. More organizations will be added as the ecosystem expands.

**You can withdraw your stETH and DAI deposit at any time.**

Starting June 18, 2024, at 11:00 AM EDT, 66% of newly minted AO tokens are allocated to wallets that pre-bridged assets. Rewards are distributed automatically based on the proportion of assets deposited.

The table below shows the approximate AO accrual over 12 months for different shares of the total yield-bearing pool, assuming stETH and DAI are the only assets provided:

- **0.01%:** 210 AO
- **0.1%:** 2,105 AO
- **0.5%:** 10,524 AO
- **1%:** 21,049 AO
- **5%:** 105,243 AO

The actual rewards may fluctuate as more assets are added and as yields vary across assets.

## How to Deposit stETH or DAI to Earn AO

**Note: AO bridging rewards are not available to U.S. residents.**

You can deposit stETH or DAI into the pre-bridge today. Rewards for stETH started accruing on June 18, 2024, at 11:00 AM EDT and are distributed once daily. Rewards for DAI started accruing on September 4th, 2024, at 11:00 AM EST.

Follow these steps to deposit stETH or DAI and start earning AO:

1. Visit the mint page on the AO website.
2. Click the “Ethereum” tab and connect your Ethereum wallet (e.g., Metamask or Rabby).
3. Enter the Arweave wallet address where you want to receive your AO tokens.
4. Deposit stETH or DAI into the [audited contract](https://etherscan.io/address/0xfE08D40Eee53d64936D3128838867c867602665c#code%23L1) by specifying the amount. If you don’t have stETH or DAI, swap other tokens to acquire some before depositing.
5. Sign the transaction in your Ethereum wallet to complete the deposit.
6. AO tokens will be sent directly to the specified Arweave wallet.

## Smart Contract Security

The pre-bridge contract has undergone extensive audits and is trustless, ensuring that only you have access to your tokens. Open Access Supercomputing Foundation, which launched AO’s token with Arweave ecosystem organizations, has the ability to _eject_ tokens back to their original owners in case of a security incident. This functionality enhances safety without centralizing control.

The pre-bridge contracts are a minor modification of the MorpheusAI deposit contracts, providing a proven foundation to reduce security risks.
