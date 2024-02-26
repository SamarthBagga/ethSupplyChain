// SPDX-License-Identifier: UNLICENSED

/**@title Check Supply Chain Authenticity
 * @author Rahul Arora
 * @author Samarth Bagga
 * @notice This is the supply chain contract.
 * @dev idk
 */

pragma solidity ^0.8.22;

interface IERC20 {
    function balanceOf(address account) external view returns (uint);
}

contract SupplyContract2 {
    address private immutable i_owner;

    struct Node {
        uint256 nodeId;
        string name;
        string typeOfNode; 
        address add;
        uint256[] ordersPresent;
        string location;
        uint256 profitShare;
        address nodeAddress;
    }

    struct Order {
        string name;
        uint256 orderId;
        string currLocation;
        string finalLocation;
        Node[] pathTillNow; 
        uint256 cost;
        bool isDone;
    }

    Order[] public activeOrders;
    Order[] public pastOrders;
    mapping(uint256 => Node) public nodesArr;
    uint256 nodesArrayLen = 0;

    mapping(uint256 => Node) public nodeMapping; // Mapping to store Node information

    constructor() {
        i_owner = msg.sender;
    }

    function getActiveOrders() public view returns (Order[] memory) {
        return activeOrders;
    }
    
    function getNodes() public view returns (Node[] memory) {
    uint256 nodeCount = 0; // Initialize a counter for nodes

    // Iterate through the mapping to count the number of nodes
    for (uint256 i = 0; ; i++) {
        if (nodesArr[i].nodeId == 0) {
            break; // Stop iterating when you encounter an empty node (default value)
        }
        nodeCount++;
    }

    Node[] memory nodes = new Node[](nodeCount); // Create an empty array

    // Iterate again to copy nodes from the mapping to the array
    for (uint256 i = 0; i < nodeCount; i++) {
        nodes[i] = nodesArr[i];
    }

    return nodes;
}



    function getActiveOrder(uint256 orderIdP) public view returns (Order memory) {
        for (uint i = 0; i < activeOrders.length; i++) {
            if (activeOrders[i].orderId == orderIdP) {
                return activeOrders[i];
            }
        }
    }

    function getPastOrder(uint256 orderIdP) public view returns (Order memory) {
        for (uint i = 0; i < pastOrders.length; i++) {
            if (pastOrders[i].orderId == orderIdP) {
                return pastOrders[i];
            }
        }
    }

    function createNode(
        uint256 _id,
        string memory _name,
        string memory _typeOfNode,
        address _add,
        uint256[] memory _ordersPresent,
        string memory _location,
        uint256 _profitShare,
        address _nodeAddress
    ) external {
        Node memory newNode = Node({
            nodeId: _id,
            name: _name,
            typeOfNode: _typeOfNode,
            add: _add,
            ordersPresent: _ordersPresent,
            location: _location,
            profitShare: _profitShare,
            nodeAddress: _nodeAddress
        });
        nodesArrayLen++;
        nodesArr[nodesArrayLen] = newNode;
        nodeMapping[_id] = newNode; // Store Node information in mapping
    }

    function createOrder(
    string memory _name,
    uint256 _id,
    string memory _currLocation,
    string memory _finalLocation,
    uint256 _cost,
    bool _isDone
) external {
    Node[] memory array = new Node[](nodesArrayLen); // Create an array for the starting node
    array[0] = nodesArr[0]; // Assign the first node

    Order memory newOrder = Order({
        name: _name,
        orderId: _id,
        currLocation: _currLocation,
        finalLocation: _finalLocation,
        pathTillNow: array,
        cost: _cost,
        isDone: _isDone
    });

    activeOrders.push(newOrder);
}

}
