// contracts/SimpleToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
    // Define the supply of SimpleToken: 1,000,000,000
    uint256 constant initialSupply = 1000000000 * (10**18);

    // Constructor will be called on contract creation
    constructor() ERC20("SimpleToken", "ST") {
        _mint(msg.sender, initialSupply);
    }
}
