const FiatToUSDC = artifacts.require("FiatToUSDC");

module.exports = function (deployer) {
  const treasuryAddress = "YOUR_TREASURY_ADDRESS";
  deployer.deploy(FiatToUSDC, treasuryAddress);
};
