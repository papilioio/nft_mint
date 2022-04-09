// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const deploy = async() => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  console.log('deproy')
  const MyNft = await ethers.getContractFactory("MYNFT")
  const mynft = await MyNft.deploy();

  await mynft.deployed();

  return `Greeter deployed to: ${mynft.address}`
}

export default deploy

