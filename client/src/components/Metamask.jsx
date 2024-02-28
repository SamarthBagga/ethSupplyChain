import React, { useState, useEffect } from 'react';

const Metamask = () => {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      const savedWalletAddress = localStorage.getItem('walletAddress');
      if (savedWalletAddress) {
        setWalletAddress(savedWalletAddress);
      }
    } else {
      localStorage.removeItem('walletAddress');
      setWalletAddress('');
    }
  }, []);

  const connectMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];

      localStorage.setItem('walletAddress', walletAddress);

      setWalletAddress(walletAddress);

      const delay = 2000;

      setTimeout(() => {
        window.location.href = '/login';
      }, delay);

    } catch (error) {
      console.error('Metamask connection error:', error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Connect Metamask</h1>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-600"
          onClick={connectMetamask}
        >
          Connect Metamask
        </button>
        {walletAddress && (
          <p className="mt-4 text-xl font-bold text-black text-center">
            Connected Wallet Address: <span className='font-normal text-lg'>{walletAddress}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Metamask;
