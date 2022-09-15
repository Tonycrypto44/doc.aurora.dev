The usual interface between the EVM and MetaMask is through the Aurora relayer.

Aurora runs on top of NEAR, so in some sense [NEAR gas] is the real measure of computational work.
However, for compatibility with Ethereum we want our users to be able to pay for transactions with ether (ETH).
To enable this, the Aurora infrastructure includes relayers which encapsulate ordinary EVM transactions into NEAR transactions, submit them on-chain, and return the transaction result.

Transaction cost ~$0.02
