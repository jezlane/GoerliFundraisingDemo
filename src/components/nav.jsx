import { Box, Heading, Spacer, ButtonGroup } from "@chakra-ui/react"

import ConnectWallet from './connectWallet.jsx'

function Nav() {
  return (
    <>
        <Box p='2'>
            <Heading size='md'>Demo App</Heading>
        </Box>
        <Spacer />
        <ConnectWallet/>
    </>
  )
}

export default Nav