// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const value = 20
console.log("Counter deploy with value:", value);

async function main() {
  await hre.run('compile');
  console.log("Counter compiled");
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(value);
  await counter.deployed();
  console.log("Counter deployed to:", counter.address);

  console.log(`Please verify: npx hardhat verify ${counter.address}` );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
