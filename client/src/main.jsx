import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

import {
  ThirdwebProvider,
  metamaskWallet
} from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
  <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
      ]}
    >
    <App />
  </ThirdwebProvider>
  </ChakraProvider>
  </React.StrictMode>
)
