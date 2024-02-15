// SPDX-License-Identifier: UNLICENSED
// address of the deployed contract - 0x4E7C2641D4d3B46D9db416302B32B617bBA294Cc

/**@title Check Supply Chain Authenticity
 * @author Rahul Arora
 * @author Samarth Bagga
 * @notice This is the native token for the supply chain
 * @dev idk
 */

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
error FundMe__NotOwner();

contract SupplyToken is ERC20 {
    address private immutable i_owner;

    constructor() ERC20("SupplyToken", "ST") {
        _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
        i_owner = msg.sender;
    }

    modifier onlyOwner() {
        // require(msg.sender == i_owner);
        if (msg.sender != i_owner) revert FundMe__NotOwner();
        _;
    }

    function mintToAddress(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(address to, uint256 amount) public {
        _burn(to, amount);
    }
}
