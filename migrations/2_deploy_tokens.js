const SafeMathLib = artifacts.require('./SafeMath.sol');
const EVM = artifacts.require('./EVM.sol');
const EVT = artifacts.require('./EVT.sol');

module.exports = (deployer) => {
  deployer.deploy(SafeMathLib);
  deployer.link(SafeMathLib, EVM);
  deployer.link(SafeMathLib, EVT);
  deployer.deploy(EVM);
  deployer.deploy(EVT);
};
