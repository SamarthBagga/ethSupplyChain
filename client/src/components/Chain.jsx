import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { connect } from 'react-redux';
import SupplyContract from "../assets/contracts/SupplyContract.json";

const Chain = ({ currentContractAddress }) => {
  const [currentOrder, setCurrentOrder] = useState('');
  const [ordersList, setOrdersList] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrdersList = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(currentContractAddress)
      const walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(currentContractAddress,SupplyContract.abi,signer);
      const transactionResponse = await contract.getActiveOrders();
      setOrdersList(transactionResponse.map(order => order.name)); // Assuming address is the property you want to render
      setOrders(transactionResponse)
    }
    getOrdersList();
  }, [])
  return (
    <div>
      <h2>Chain Section</h2>
      <select value={currentOrder} onChange={(e) => setCurrentOrder(e.target.value)}>
            <option value="">Select Order</option>
            {ordersList.map((address, index) => (
              <option key={index} value={address}>{address}</option>
            ))}
          </select>
      {/* Add your content for Chain section */}
    </div>
  );
};


const mapStateToProps = (state) => ({
  currentContractAddress: state.currentContractAddress, // Accessing currentContract from Redux store state
});

export default connect(mapStateToProps)(Chain); 
