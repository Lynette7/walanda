const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const ExpenseSplitterFactory = await ethers.getContractFactory("ExpenseSplitter");

  // Deploy the contract
  const expenseSplitter = await ExpenseSplitterFactory.deploy();
  await expenseSplitter.deployed();

  console.log("Walanda Splitter deployed to:", expenseSplitter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });