// scripts/interact.js
const { ethers } = require("hardhat");

async function main() {
    const contractAddress = '0x0dcd1bf9a1b36ce34237eeafef220932846bcd82';
    const approveAmount = 1000
    const decimals = 18

    console.log(`Getting info about contract: ${contractAddress}\n`);

    const token = await ethers.getContractAt('SimpleToken', contractAddress);
    const name = await token.name();
    const symbol = await token.symbol();
    const totalSupply = await token.totalSupply();
    console.log(`Name, Symbol, Supply: ${name} ${symbol} ${ethers.formatUnits(totalSupply, decimals)} \n`);

    const signers = await ethers.getSigners();
    const ownerAddress = signers[0].address;
    let ownerBalance = await token.balanceOf(ownerAddress);
    console.log(`${ownerAddress} has balance of \n${ethers.formatUnits(ownerBalance, decimals)} ${symbol}\n`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
