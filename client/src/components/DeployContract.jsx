import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import SupplyContract from "../assets/contracts/SupplyContract.json";
import {toast} from 'react-toastify';

const DeployContract = () => {
    const [deployedAddress, setDeployedAddress] = useState('');

    const deployContract = async () => {
        try {
            // Check if MetaMask is installed
            if (window.ethereum) {
                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Use ethers.js with MetaMask's provider
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                if (provider == undefined) {
                    alert("Connect your wallet first");
                }
                const signer = provider.getSigner();

                const SimpleContractFactory = new ethers.ContractFactory(
                    SupplyContract.abi,
                    SupplyContract.data.bytecode,
                    signer
                );

                const deployedContract = await SimpleContractFactory.deploy();
                await deployedContract.deployed();

                setDeployedAddress(deployedContract.address);
                toast.success("Your contract is deployed at "+ deployedContract.address);
                
            } else {
                console.error('MetaMask is not installed');
            }
        } catch (error) {
            console.error('Error deploying contract:', error);
        }
    };

    return (
        <div>
            <button onClick={deployContract}>Click me to deploy your contract</button>
        </div>
    );
}

export default DeployContract;
