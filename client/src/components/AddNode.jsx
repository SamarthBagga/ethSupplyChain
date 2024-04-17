import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import { connect } from 'react-redux';
import SupplyContract from "../assets/contracts/SupplyContract.json";

const AddNode = ({ currentContractAddress }) => {
  const [name, setName] = useState('');
  const [typeOfNode, setTypeOfNode] = useState('');
  const [ordersPresent, setOrdersPresent] = useState('');
  const [location, setLocation] = useState('');
  const [profitShare, setProfitShare] = useState('');
  const [nodeAddress, setNodeAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log("current is " + currentContractAddress)
        const walletAddress = await signer.getAddress();
        const contract = new ethers.Contract(currentContractAddress,SupplyContract.abi,signer);
        let array = [];
        const transactionResponse = await contract.createNode(name, typeOfNode, array, location, ethers.utils.parseEther(profitShare.toString()), nodeAddress);
        console.log(transactionResponse)
    // Handle form submission
  };
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
        <label htmlFor="typeOfNode" className="block text-gray-700 font-bold mb-2">Type of Node</label>
        <input
          type="text"
          id="typeOfNode"
          value={typeOfNode}
          onChange={(e) => setTypeOfNode(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter type of node"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter location"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="profitShare" className="block text-gray-700 font-bold mb-2">Profit Share</label>
        <input
          type="number"
          id="profitShare"
          value={profitShare}
          onChange={(e) => setProfitShare(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter profit share"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nodeAddress" className="block text-gray-700 font-bold mb-2">Node Address</label>
        <input
          type="text"
          id="nodeAddress"
          value={nodeAddress}
          onChange={(e) => setNodeAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter node address"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentContractAddress: state.currentContractAddress, // Accessing currentContract from Redux store state
});

export default connect(mapStateToProps)(AddNode); 
