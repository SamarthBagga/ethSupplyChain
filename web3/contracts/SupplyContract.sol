// SPDX-License-Identifier: UNLICENSED

/**@title Check Supply Chain Authenticity
 * @author Rahul Arora
 * @author Samarth Bagga
 * @notice This is the native token for the supply chain
 * @dev idk
 */
pragma solidity ^0.8.9;
interface IERC20 {
    function balanceOf(address account) external view returns (uint);
}
error FundMe_NotOwner();
contract SupplyContract {
    bool isOpen = true;
    address private immutable i_owner;
    Node[] public supplyChainMap;

    constructor() {
    i_owner = msg.sender;
}
    modifier onlyOwner() {
        // require(msg.sender == i_owner);
        if (msg.sender != i_owner) revert FundMe_NotOwner();
        _;
    }
    struct Node {
        string name;
        string typeOfNode; // whether it is a manufacturer supplier etc
        string location;
        bool reached; // if reached is true but verified is false that means that it is still in progress on the location
        bool verified;
    }
    function getTokenBalance(address tokenAddress, address accountAddress) external view returns (uint) {
        IERC20 token = IERC20(tokenAddress);
        return token.balanceOf(accountAddress);
    }
    function ifOpen() external view returns(bool) {
        return isOpen;
    }
    function closeChain() external {
        isOpen = false;
    }
    function createchain(Node[] memory items) external onlyOwner {
        for (uint i = 0; i < items.length; i++) {
            supplyChainMap[i] = items[i];
        }
    }
    function addNode(Node memory item) external onlyOwner {
        supplyChainMap[supplyChainMap.length - 1] = item;
    }
    function returnChain() external view returns (Node[] memory) {
        return supplyChainMap;
    }
}
