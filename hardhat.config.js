/**
*  @type import( 'hardhat/config').HardhatUserConfig
*/
const {ethers} = require('ethers');
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
//require("@nomiclabs/hardhat-waffle");
//const {ethers} = require("hardhat");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
       ropsten: {
         url: API_URL,
          //accounts: ['0x${PRIVATE_KEY}']
          accounts: [PRIVATE_KEY]
        }
    },
  }