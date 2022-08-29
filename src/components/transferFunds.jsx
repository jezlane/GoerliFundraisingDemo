import { useState} from 'react'
import { Box, Button, Text, Heading } from "@chakra-ui/react"
import { useEthers, useEtherBalance, useSendTransaction } from '@usedapp/core'
import { parseEther } from '@ethersproject/units'

const TransferFunds = () => {

    const { account, chainId } = useEthers()
    const userBalance = useEtherBalance(account)
    const { sendTransaction, state } = useSendTransaction()

    const [disabled, setDisabled] = useState(false)
    //chainId === Mainnet.chainId


    const status = state.status
    const address = '0xB82e4f721ba840A4f850Ea053C9ae82295159360'
    const amount = 0.0001

    const send = () => {
        //setDisabled(true)
        sendTransaction({ to: address, value: parseEther(amount.toString()) })
    }

    return disabled ? (
        <Text>Please change the network from Mainnet to proceed.</Text>
      ) : account ? (
        <Box
          maxWidth="445px"
          width='full'
          bg='gray.600'
          rounded='md'
          marginBottom="8"
          padding='6'
          overflow='hidden'
        >
          <Heading size="sm" paddingBottom="2">Send Funds with your Wallet</Heading>
          <Button onClick={() => send()}>Send {amount} ether</Button>
          <Text>Status: {status}</Text>
        </Box>
      ) : (
        <></>
      )
}

export default TransferFunds