//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IRouter {
  function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
    external
    payable
    returns (uint[] memory amounts);
}

interface IERC20 {
  function balanceOf(address) external view returns(uint);
}
