const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory
    const ExpenseSplitterFactory = await ethers.getContractFactory("WalandaSplitter");

    // Deploy the contract
    const expenseSplitter = await ExpenseSplitterFactory.deploy();


    console.log("Walanda Splitter deployed to:", await expenseSplitter.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });