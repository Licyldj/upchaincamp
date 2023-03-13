require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: ["2f6859eaf9b063a48a0f33fb4a7de3981b3b040a197a61e11bf2f26fb617b7ee"],
      chainId: 5,
    },

  },


  abiExporter: {
    path: './deployments/abi',
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: true,
  },

  etherscan: {
    apiKey: "BKTRHF7J93Z8D9CU2CHUDND3IQEQ7UKMXF"
  },
};
