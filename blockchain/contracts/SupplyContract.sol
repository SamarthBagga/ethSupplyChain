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

contract SupplyContract {
    address private immutable i_owner;

    struct Node {
        uint256 nodeId;
        string name;
        string typeOfNode; 
        uint256[] ordersPresent;
        string location;
        uint256 profitShare;
        address payable nodeAddress;
    }

    struct Order {
        string name;
        uint256 orderId;
        uint256 currLocation;
        uint256 finalLocation;
        uint256 cost;
        bool isDone;
        uint256[] pathTillNow; // contains the nodeIds
    }

    // mapping (uint256 => Order) activeOrders;
    Order[] public pastOrders;
    mapping (uint256 => Node) public  nodesWithId;
    mapping (uint256 => Order) public  orderWithId;
    mapping (uint256 => uint256) public orderWithCost; // order id: cost of order
    Node[] public nodes;
    Order[] public activeOrders;
    uint256 numberOfActiveOrders = 0;
    uint256 totalMoney = 0;
    


    constructor() {
        i_owner = msg.sender;
    }

    function getActiveOrder(uint256 _orderId) public view returns (Order memory) {
        for (uint i = 0; i < activeOrders.length; i++) {
            if(activeOrders[i].orderId == _orderId) {
                return activeOrders[i];
            }
        }
    }

    function getPastOrder(uint256 _orderId) public view returns (Order memory) {
        for (uint i = 0; i < pastOrders.length; i++) {
            if (pastOrders[i].orderId == _orderId) {
                return pastOrders[i];
            }
        }
        revert("Order not found");
    }

    function getNodes(uint256 _nodeId) public view returns (Node memory) {
        return nodesWithId[_nodeId];
    }

    function createNode(
        string memory _name,
        string memory _typeOfNode,
        uint256[] memory _ordersPresent,
        string memory _location,
        uint256 _profitShare,
        address payable _nodeAddress
    ) external {
        Node memory newNode = Node({
            nodeId: nodes.length,
            name: _name,
            typeOfNode: _typeOfNode,
            ordersPresent: _ordersPresent,
            location: _location,
            profitShare: _profitShare,
            nodeAddress: _nodeAddress
        });
        nodesWithId[nodes.length] = newNode; // add node to node map
        nodes.push(newNode);
        totalMoney = totalMoney + _profitShare;
    }

    function createOrder(
        string memory _name,
        uint256 _currLocation,
        uint256 _finalLocation,
        uint256 _cost,
        bool _isDone,
        uint256[] memory _pathTillNow
    ) external {
        Order memory newOrder = Order({
            name: _name,
            orderId: pastOrders.length,
            currLocation: _currLocation,
            finalLocation: _finalLocation,
            cost: _cost,
            isDone: _isDone,
            pathTillNow: _pathTillNow
        });
        
        orderWithId[pastOrders.length] = newOrder;
        numberOfActiveOrders++;
    }

    function getOrderPath(uint256 _orderId) public view returns (uint256[] memory) {
        return orderWithId[_orderId].pathTillNow;
    }

    function sendToNext(uint256 _orderId) public {
        if(!ifFinalLoc(_orderId)){
    require(nodesWithId[orderWithId[_orderId].currLocation].nodeAddress == msg.sender, "Unauthorized sender");
    for (uint i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeAddress == nodesWithId[orderWithId[_orderId].currLocation].nodeAddress) {
            orderWithId[_orderId].currLocation = nodes[i + 1].nodeId;
            break;
        }
    } 
    }
        
}
    function ifFinalLoc(uint256 _orderId) internal returns(bool) {
        if ((orderWithId[_orderId]).currLocation == (orderWithId[_orderId]).finalLocation) {
    orderWithId[_orderId].isDone = true;

    // Loop to remove Order from activeOrders
    uint256 lastIndex = activeOrders.length - 1;
    for (uint256 i = 0; i < lastIndex; i++) {
      if (activeOrders[i].orderId == _orderId) {
        activeOrders[i] = activeOrders[lastIndex];
        activeOrders.pop(); // Remove the last element (swapped value)
        break;
      }
    }

    numberOfActiveOrders--;
    return true;
  }
  pastOrders.push(orderWithId[_orderId]);
  return false;
}


    receive() external payable {
        require(totalMoney != msg.value, "Send only the exact amount");
        sendMoney();
    }

    function sendMoney() internal {
        for (uint i = 0; i < nodes.length; i++) {
            address payable add = nodes[i].nodeAddress;
            add.transfer(nodes[i].profitShare);
        }
    }

   function getFirstNode() public view returns (string memory) {
    return nodes[0].name;
}
function getLastNode() public view returns (string memory) {
    return nodes[nodes.length - 1].name;
}
    function getLengthOfNodesArray() public view returns (uint256) {
        return nodes.length;
    }

    function getActiveOrders() public view returns (Order[] memory) {
    return activeOrders;
}




}
