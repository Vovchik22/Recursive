var Recursive = artifacts.require("./Recursive.sol");
var treasury = '0x0b03ec60ec464bbbf6bab1da00dda001e7af5064';

module.exports = function(deployer) {
    deployer.deploy(Recursive, treasury);
};
