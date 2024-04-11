import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DeployContract from '../components/DeployContract';
import { ethers } from "ethers";
import SupplyContract from "../assets/contracts/SupplyContract.json";


const Home = () => {
  const [contractAddresses, setContractAddresses] = useState([]);
  const [currentContract, setCurrentContract] = useState('');

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
  const ifFinalLoc = async () => {
    console.log("HELLo")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const walletAddress = await signer.getAddress();
        const contract = new ethers.Contract(currentContract,SupplyContract.abi,signer);
        const transactionResponse = await contract.ifFinalLoc(1);
        console.log(transactionResponse)
  }

  
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center'>
        <DeployContract />
        {contractAddresses.length > 0 && (
          <select value={currentContract} onChange={(e) => setCurrentContract(e.target.value)}>
            <option value="">Select Contract</option>
            {contractAddresses.map((address, index) => (
              <option key={index} value={address}>{address}</option>
            ))}
          </select>
        )}
        <button onClick={ifFinalLoc}>CLICK ME PLEASE</button>
      </div>
    </>
  );
};

export default Home;
