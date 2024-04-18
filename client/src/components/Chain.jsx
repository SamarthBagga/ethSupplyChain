import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { connect } from 'react-redux';
import SupplyContract from "../assets/contracts/SupplyContract.json";
import { Timeline } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import CheckIcon from '@rsuite/icons/legacy/Check';



const Chain = ({ currentContractAddress }) => {
  const [currentOrder, setCurrentOrder] = useState('');
  const [ordersList, setOrdersList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [nodes,setNodes] = useState([]);
  const [currentNodeLocation, setCurrentNodeLocation] = useState('');

  const getOrder = async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(currentContractAddress)
      const walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(currentContractAddress,SupplyContract.abi,signer);
      const order = await contract.getOrderWithId(currentOrder);
      setCurrentNodeLocation(order.currLocation.toNumber())
      const nodesFromContract = await contract.getNodesArray();
      console.log(nodesFromContract)
      setNodes(nodesFromContract.map(node => (node.name).toString()));
  } 

  useEffect(() => {
    getOrder();
  },[currentOrder]);

  useEffect(() => {
    const getOrdersList = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(currentContractAddress)
      // const walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(currentContractAddress,SupplyContract.abi,signer);
      const transactionResponse = await contract.getActiveOrders();
      console.log(transactionResponse)
      setOrdersList(transactionResponse.map(order => (order.orderId).toString())); 
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

      <div className='flex justify-center h-screen'>


      <Timeline>
  {nodes.map((node, index) => (
    currentNodeLocation > index ?
      <Timeline.Item dot={<CheckIcon style={{ background: '#15b215', color: '#fff' }} />} key={index}>{node}</Timeline.Item> :
      <Timeline.Item key={index}>{node}</Timeline.Item>
  ))}
</Timeline>




      </div>
      {/* Add your content for Chain section */}
    </div>
  );
};


const mapStateToProps = (state) => ({
  currentContractAddress: state.currentContractAddress, // Accessing currentContract from Redux store state
});

export default connect(mapStateToProps)(Chain); 
