require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
const { ALCHEMY_API_URL, PRIVATE_KEY } = process.env;
module.exports = {
    solidity: "0.8.24",
    networks: {

        hardhat: {

        },
        sepolia: {
            url: ALCHEMY_API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }



    }

};