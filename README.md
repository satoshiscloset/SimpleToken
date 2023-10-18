# Sample ERC-20 Token Deploy

This project demonstrates a basic ERC-20 use case. It comes with a sample contract and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat node # run a local node
npx hardhat run scripts/deploy.js --network localhost # deploy to local node
npx hardhat run scripts/interact.js --network localhost # interact with contract on local node
```

To deploy to public networks, update/edit `hardhat.config.js`:

```js
module.exports = {
  solidity: "0.8.9",
  networks: {
    [NETWORK]: {
      url: RPC_URL,
      accounts: [NETWORK_PRIVATE_KEY]
    }
  }
};
```

then you can call the above commands using provided NETWORK:

```shell
npx hardhat run scripts/deploy.js --network NETWORK
npx hardhat run scripts/interact.js --network NETWORK
```
