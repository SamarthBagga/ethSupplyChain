import React from 'react';
import Navbar from '../components/Navbar';
import DeployContract from '../components/DeployContract';


const Home = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center'>
      <DeployContract/>
    </div>
    </>
  )
}

export default Home