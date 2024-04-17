import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import { connect } from 'react-redux';
import SupplyContract from "../assets/contracts/SupplyContract.json";

const AddOrder = ({ currentContractAddress }) => {
  const [name, setName] = useState('');
  const [typeOfNode, setTypeOfNode] = useState('');
  const [ordersPresent, setOrdersPresent] = useState('');
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [nodeAddress, setNodeAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log("current is " + currentContractAddress)
        const walletAddress = await signer.getAddress();
        const contract = new ethers.Contract(currentContractAddress,SupplyContract.abi,signer);
        // const firstNode = await contract.getFirstNode();
        const lastNode = await contract.getLengthOfNodesArray();
        let array = [];
        const transactionResponse = await contract.createOrder(name, 0, lastNode, ethers.utils.parseEther(cost.toString()), false, array);
        console.log(transactionResponse)
    // Handle form submission
  };

  // const getFirstNode = async (e) => {
  //   console.log(currentContractAddress)
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   // const walletAddress = await signer.getAddress();
  //   const contract = new ethers.Contract(currentContractAddress,SupplyContract.abi,signer);
    
  //   console.log(firstNode);
  // }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cost" className="block text-gray-700 font-bold mb-2">Cost</label>
        <input
          type="number"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Cost of Order"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Order
      </button>
    </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentContractAddress: state.currentContractAddress, // Accessing currentContract from Redux store state
});

export default connect(mapStateToProps)(AddOrder); 
