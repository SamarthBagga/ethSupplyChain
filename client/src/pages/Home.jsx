import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DeployContract from '../components/DeployContract';
import { ethers } from "ethers";
import SupplyContract from "../assets/contracts/SupplyContract.json";
import AddNode from '../components/AddNode';
import Chain from '../components/Chain';
import AddOrder from '../components/AddOrder';
import { connect } from 'react-redux'; // Import connect
import { setCurrentContract } from '../../store/actions';

const Home = ({ setCurrentContract, currentContract }) => { // Destructure currentContract from props
  const [contractAddresses, setContractAddresses] = useState([]);
  // Remove useState for currentContract

  useEffect(() => {
    const doStuff = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const walletAddress = await signer.getAddress();
        console.log(walletAddress)

        const response = await fetch('http://localhost:5000/api/contracts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            walletAddress,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch contract');
        }

        const responseData = await response.json();
        console.log(responseData)
        setContractAddresses(responseData.contracts);
        console.log(contractAddresses);
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: 'Error occurred!',
          description: error.message || 'Unknown error',
          status: 'error',
          position: 'bottom-right',
          duration: 4000,
        });
      }
    };

    doStuff(); // Call the function inside useEffect to execute it once on component mount
  }, []); // Empty dependency array ensures the function is executed only once

  const [selectedSection, setSelectedSection] = useState('addNode');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center'>
        {contractAddresses.length > 0 && (
          <select value={currentContract} onChange={(e) => setCurrentContract(e.target.value)}>
            <option value="">Select Contract</option>
            {contractAddresses.map((address, index) => (
              <option key={index} value={address}>{address}</option>
            ))}
          </select>
        )}
      </div>
      <div className='flex justify-center items-center'>
        <div className="space-x-4">
          <button
            onClick={() => handleSectionChange('addNode')}
            className={`px-4 py-2 rounded-md focus:outline-none ${selectedSection === 'addNode' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            Add Node
          </button>
          <button
            onClick={() => handleSectionChange('chain')}
            className={`px-4 py-2 rounded-md focus:outline-none ${selectedSection === 'chain' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            Chain
          </button>
          <button
            onClick={() => handleSectionChange('addOrder')}
            className={`px-4 py-2 rounded-md focus:outline-none ${selectedSection === 'addOrder' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            Add Order
          </button>
        </div>
      </div>
      {selectedSection === 'addNode' && <AddNode />}
      {selectedSection === 'chain' && <Chain />}
      {selectedSection === 'addOrder' && <AddOrder/>}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentContract: state.currentContract,
});

export default connect(mapStateToProps, { setCurrentContract })(Home); // Connect component to Redux store and actions
