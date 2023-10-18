const { ethers } = require("hardhat");

async function main() {
  // Get the contract owner
   const signers = await ethers.getSigners();
   console.log(`Deploying contract from: ${signers[0].address}`);

   // Hardhat helper to get the ethers contractFactory object
   const SimpleToken = await ethers.getContractFactory('SimpleToken');

   // Deploy the contract
   console.log('Deploying token...');
   const token = await SimpleToken.deploy();
   await token.deployed();
   console.log(`SimpleToken deployed to: ${token.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
