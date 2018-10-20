const Inheritance = artifacts.require('./Inheritance.sol')

module.exports = function(deployer) {
  deployer.deploy(Inheritance)
};
