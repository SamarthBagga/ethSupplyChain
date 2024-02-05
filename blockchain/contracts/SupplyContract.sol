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
    mapping(address => uint256) balances;
    uint256 total = 0;
   
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
        address add;
        uint256 payment;
    }
    function getTokenBalance(address tokenAddress, address accountAddress) external view returns (uint) {
        IERC20 token = IERC20(tokenAddress);
        return token.balanceOf(accountAddress);
    }
    function getTokenBalanceInt(address tokenAddress, address accountAddress) internal  view returns (uint) {
        IERC20 token = IERC20(tokenAddress);
        return token.balanceOf(accountAddress);
    }
    function ifOpen() external view returns(bool) {
        return isOpen;
    }
    function closeChain() internal  {
        isOpen = false;
        for (uint i = 0; i < supplyChainMap.length; i++) {
            uint256 pay = supplyChainMap[i].payment;
            payable(supplyChainMap[i].add).transfer(pay);
        }
    }
    function createchain(Node[] memory items) external onlyOwner {
        for (uint i = 0; i < items.length; i++) {
            supplyChainMap[i] = items[i];
            total += supplyChainMap[i].payment;
        }
    }
    function addNode(Node memory item) external onlyOwner {
        supplyChainMap[supplyChainMap.length - 1] = item;
        total += item.payment;
    }
    function returnChain() external view returns (Node[] memory) {
        return supplyChainMap;
    }
    function resetChain() internal onlyOwner {
        isOpen = true;
        for (uint i = 0; i < supplyChainMap.length; i++) {
            supplyChainMap[i].reached = false;
            supplyChainMap[i].verified = false;
        }
    }

    function setVerified(address add1) external  {
        for (uint i = 0; i < supplyChainMap.length; i++) {
            if (supplyChainMap[i].add == add1) {
                supplyChainMap[i].verified = true;
            }
        }
        uint256 bal = getTokenBalanceInt(0x4E7C2641D4d3B46D9db416302B32B617bBA294Cc, address(this));
        if (bal == 0) {
            closeChain();
        }
    }

    function setReached(address add1) external  {
        for (uint i = 0; i < supplyChainMap.length; i++) {
            if (supplyChainMap[i].add == add1) {
                supplyChainMap[i].reached = true;
            }
        }
    }

   
   function deposit() external payable {
     require(msg.value > 0, "Zero ether not allowed");
     require(msg.value > total, "Payment should be greater than total");
     balances[msg.sender] = balances[msg.sender] + msg.value;
     resetChain();
     
   }

    // Function to get the contract balance
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
