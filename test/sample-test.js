const { expect } = require("chai");
const { ethers } = require("hardhat");

// trade ether for dai
const routerAddr = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const wethAddr = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const daiAddr = "0x6b175474e89094c44da98b954eedeac495271d0f";

describe("Router", function () {
  let router, dai;
  before(async () => {
    router = await ethers.getContractAt("IRouter", routerAddr);
    dai = await ethers.getContractAt("IERC20", daiAddr);
  });

  it("should give us a trade", async function () {
    const [account1] = await ethers.provider.listAccounts();
    await router.swapExactETHForTokens(
      0,
      [wethAddr, daiAddr],
      account1,
      Math.floor(Date.now() / 1000) + 60,
      { value: ethers.utils.parseEther("10") }
    );

    const balance = ethers.utils.formatEther(await dai.balanceOf(account1));

    console.log(balance);
  });
});
