import React, { useState, useEffect } from 'react';

const Home = () => {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const savedWalletAddress = localStorage.getItem('walletAddress');

    if (savedWalletAddress) {
      setWalletAddress(savedWalletAddress);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="flex justify-center text-4xl font-bold mb-4">Home</h1>
      {walletAddress && (
        <p className="text-center text-xl font-bold">Wallet Address: <span className='font-normal text-lg'>{walletAddress}</span></p>
      )}
    </div>
  );
};

export default Home;
