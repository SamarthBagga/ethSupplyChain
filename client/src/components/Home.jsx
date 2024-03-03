import React from 'react';
import {ConnectWallet} from '@thirdweb-dev/react'

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <ConnectWallet theme='light' />
    </div>
  )
}

export default Home