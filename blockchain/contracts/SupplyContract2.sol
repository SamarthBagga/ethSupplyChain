// SPDX-License-Identifier: UNLICENSED

/**@title Check Supply Chain Authenticity
 * @author Rahul Arora
 * @author Samarth Bagga
 * @notice This is the supply chain contract.
 * @dev idk
 */

pragma solidity ^0.8.9;

interface IERC20 {
    function balanceOf(address account) external view returns (uint);
}

contract SupplyContract2 {
    address private immutable i_owner;
    Order[] public activeOrders;
    Order[] public pastOrders;
    struct Node {
        string name;
        string typeOfNode; // whether it is a manufacturer supplier etc
        address add;
        uint256[] ordersPresent; // only the id of the orders, if we want the orders present at the node then we would have to loop through the activeOrders and match the id from this array to get the orders present at the location
        string location;
        uint256 profitShare; // Must be in points as the cost of the order will be divided
        // uint256 payment;
    }
    struct Order {
        string name;
        uint256 id;
        string currLocation;
        string finalLocation;
        Node[] pathTillNow;
        uint256 cost;
        bool isDone;
    }

    constructor() {
        i_owner = msg.sender;
    }

    function getActiveOrders() public view returns (Order[] memory) {
        return activeOrders;
    }
}
