/*
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

// First read in the secrets.json to get our mnemonic
let secrets;
let mnemonic;
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  mnemonic = secrets.mnemonic;
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
      'this will fail. Otherwise, you can ignore this message!');
  mnemonic = '';
}*/

module.exports = {
  networks: {
    /*
    live: {
      network_id: 1, // Ethereum public network
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle
      makes during migrations
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io'),
      network_id: '3',
    },*/
    development: {
      network_id: 'default',
      host: 'localhost',
      port: 8545,
      from: '0xa2fd976b0198d970bdfd678051e05d5466720608',
      gas: 4612388,
    },
  },
};
