---
title: EVM Overview
sidebar_position: 1
---

Initially developed in-house in NEAR, the Aurora EVM is the official EVM for the
NEAR ecosystem. _It accomplishes a 1:1 experience with the Ethereum protocol
including adopting ETH as the base currency_. Beyond the base scope, the EVM also allows
for extra precompiles which allows for the EVM to interact with the NEAR blockchain.

:::tip
We implore you to interact through the EVM through MetaMask or Hardhat as we provide
and identical experience through our RPC. However, you may also interact with it through NEAR
workspaces, the NEAR CLI, or the Aurora CLI.
:::

:::warning
Since the underlying measure of computational work is _NEAR gas_, an edge case that arises is when
the transaction runs out of NEAR gas before running out of _EVM gas_.

_In this case the transaction will be considered as failed on Aurora_, but this may or may not be
compatible with what the outcome on Ethereum would have been (if the gas limit was actually high
enough for the transaction to complete had NEAR gas not been the limiting factor).

This case will not come up for the vast majority of transactions, and indeed will become
less likely as we improve the efficiency of our EVM contract (thus allowing NEAR gas to go further
in terms of EVM computation). Eventually we hope to eliminate this entirely by setting
the [ETH block gas limit] on Aurora to be lower than the amount of NEAR which we could spend in one
transaction.

[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
:::

## Powered by SputnikVM 

The Aurora EVM utilises the power of the [SputnikVM] in it's current implementation. Used by other
industry EVM implementations and through careful consideration, we have chosen to adopt SputnikVM
to power the Aurora EVM. Additionally, part of the Aurora Labs team have been made contributors to 
the project due to the significant contributions that they have made. However, we intend to explore 
other implementations and possibly develop our own backend depending on performance considerations.

[SputnikVM]: https://github.com/rust-blockchain/evm

## Additional Features

There have been additional features developed to accommodate the needs for the users of the
ecosystem. Most importantly, some were added to marry Ethereum's synchronous environment to NEAR
asynchronicity.

### Changes to the output of some Opcodes

Some of the Opcodes provided by Ethereum we are not able to entirely support. Though we do not
believe that this will impact ERC-20 contracts that use these Opcodes, it is important to note these
changes which can be found in the [Aurora EVM opcode documentation].

[Aurora EVM opcode documentation]: ./opcodes.md

### Additional precompiles

In order to provide additional support of the Near ecosystem, some additional precompiles are 
available. However, the `exitToNear` and `exitToEthereum` precompiles are only accessible through 
the NEP-141 to ERC-20 contract which only can be deployed via the `deploy_erc20_token` function in
the Aurora EVM.

More information about these precompiles can be found in the [Aurora EVM precompile documentation].

[Aurora EVM precompile documentation]: ./precompiles.md

### Default NEP-141 mapped ERC-20 contract

Under the hood, all bridged ERC-20 contracts are Near NEP-141 through the process described in the
[Rainbow Bridge overview]. In order to grant the ability to access them as an ERC-20 contract, we 
use the NEP-141 mapped ERC-20 contract which is automatically deployed by the Aurora EVM when
invoking the `deploy_erc20_token` function. More information about this contract can be found in
the [Aurora EVM NEP-141 to ERC-20 map contract] documentation.

[Rainbow Bridge Overview]: ../bridge/bridge-overview.md
[Aurora EVM NEP-141 to ERC-20 map contract]: ./nep-141-mapped-erc-20.md
