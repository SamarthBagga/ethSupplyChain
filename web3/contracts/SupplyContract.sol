// SPDX-License-Identifier: UNLICENSED

/**@title Check Supply Chain Authenticity
 * @author Rahul Arora
 * @author Samarth Bagga
 * @notice This is the native token for the supply chain
 * @dev idk
 */
pragma solidity ^0.8.9;

error FundMe_NotOwner();
contract SupplyContract {
    address private immutable i_owner;
    uint256 balance = 1;
    modifier onlyOwner() {
        // require(msg.sender == i_owner);
        if (msg.sender != i_owner) revert FundMe_NotOwner();
        _;
    }
    function contractBalance() public returns (uint256)  {
        if (balance == 0) {
            return 0;
        }
        balance = balance - 1;
        return balance;
    }
}
