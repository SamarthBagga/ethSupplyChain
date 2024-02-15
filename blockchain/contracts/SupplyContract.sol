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

 contract SupplyContract2 {
    address private immutable i_owner;
    Order[] public activeOrders;
    mapping (uint256 => Order) activeOrdersMap;
    Order[] public pastOrders;
    mapping (uint256 => Order) pastOrdersMap;
    Node[] public chain;
    mapping (uint256 => Node) chainMap;

    struct Node {
        uint256 nodeID;
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
        uint256 orderID;
        uint256 currLocation;
        uint256 finalLocation;
        Node[] pathTillNow;
        uint256 cost;
        bool isDone;
    }
        constructor() {
    i_owner = msg.sender;
        }
    function createOrder(
        string memory name,
        uint256 orderID,
        uint256 currLocation,
        uint256 finalLocation,
        Node[] memory pathTillNow,
        uint256 cost,
        bool isDone
    ) public {
        Order memory newOrder = Order({
            name: name,
            orderID: orderID,
            currLocation: currLocation,
            finalLocation: finalLocation,
            pathTillNow: pathTillNow,
            cost: cost,
            isDone: isDone
        });

        // Store the new order in the mapping
        activeOrders[activeOrders.length - 1] = newOrder;
        activeOrdersMap[orderID] = newOrder;
    }

    function getActiveOrders() public view returns (Order[] memory) {
        return activeOrders;
    }
    function getPastOrders() public view returns (Order[] memory) {
        return pastOrders;
    }
    function createChain(Node[] memory nodes) public view {
        for(uint i = 0; i < nodes.length; i++) {
            nodes[i] = chain[i];
            chainMap[nodes[i].nodeID] = nodes[i]; 
        }
    }
    function addNode(Node memory node, uint256 pos) public  {
        require(pos < chain.length, "Position is invalid");
        Node memory last;
        if(pos == 1) {
            last = chain[0];
        for (uint i = 1; i < chain.length; i++) {
            Node memory temp = chain[i];
            chain[i] = last;
            last = temp;
        }
        chain[0] = node;
        return;
        }
        last = chain[pos - 1];
        for (uint i = pos; i < chain.length; i++) {
            Node memory temp = chain[i];
            chain[i] = last;
            last = temp;
        }
        chain[pos - 1] = node;
        return;
    }
    function deleteNode(uint256 id) public {
    for (uint i = 0; i < chain.length; i++) {
        if (chain[i].nodeID == id) {
            chain[i] = chain[chain.length - 1];
            chain.pop();
        }
    }
}  
    function moveOrder(uint256 orderID) public {
        for(uint i = 0; i < chain.length; i++) {
            
        } 
    }
    function sendMoney
    




 }f