//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.8.0;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  constructor() ERC20("MyToken", "MTK") public {
    _mint(msg.sender, 10000);
  }
}
