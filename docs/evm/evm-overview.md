---
title: EVM Overview
sidebar_position: 1
---

Initially developed in-house in NEAR, the Aurora EVM is the official EVM for the
NEAR ecosystem. _It accomplishes a 1:1 experience with the Ethereum protocol
including adopting ETH as the base currency_. Beyond the base scope, the EVM also allows
for extra precompiles which allows for the EVM to interact with the NEAR blockchain.

:::tip
We implore you to interact through the EVM through metamask or hardhat as we provide
and identical experience. However, you may also interact with it through NEAR workspaces,
the NEAR CLI, or the Aurora CLI.
:::

:::warning
Since the underlying measure of computational work is _NEAR gas_, an edge case that arises is when the
transaction runs out of NEAR gas before running out of _EVM gas_.

_In this case the transaction will be considered as failed on Aurora_, but this may or may not be
compatible with what the outcome on Ethereum would have been (if the gas limit was actually high
enough for the transaction to complete had NEAR gas not been the limiting factor).

This case will not come up for the vast majority of transactions, and indeed will become 
less likely as we improve the efficiency of our EVM contract (thus allowing NEAR gas to go further
in terms of EVM computation). Eventually we hope to eliminate this entirely by setting the [ETH block
gas limit] on Aurora to be lower than the amount of NEAR which we could spend in one transaction.

[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
:::
