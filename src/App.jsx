import { Mainnet, Goerli,  DAppProvider } from '@usedapp/core'
import { ChakraProvider } from '@chakra-ui/react'
import { getDefaultProvider } from 'ethers'

import MainLayout from './layouts/MainLayout.jsx'
import HeaderLayout from './layouts/HeaderLayout.jsx'
import Home from './components/home.jsx'
import Nav from './components/nav.jsx'

const config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

import customTheme from './theme/theme.js'



function App() {

  return (
    <DAppProvider config={config}>
      <ChakraProvider theme={customTheme}>
        <HeaderLayout>
          <Nav />
        </HeaderLayout>
        <MainLayout>
          <Home />
        </MainLayout>
      </ChakraProvider>
    </DAppProvider>
  )
}

export default App
