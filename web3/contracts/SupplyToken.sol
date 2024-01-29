// SPDX-License-Identifier: UNLICENSED
// address of the deployed contract - 0xc51b447d5288c9c4355aecad49b19c8655d2a5d9
pragma solidity ^0.8.9;

/**@title Check Supply Chain Authenticity
 * @author Rahul Arora
 * @author Samarth Bagga
 * @notice This is the native token for the supply chain
 * @dev idk
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SupplyToken is ERC20 {
    constructor() ERC20("SupplyToken", "ST") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}

