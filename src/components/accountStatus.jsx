import { Box, Link, Text, Heading } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getNetwork } from '@ethersproject/providers'

const AccountStatus = () => {

    const { account, chainId } = useEthers()
    const userBalance = useEtherBalance(account)


    return account ?
        (
            <Box
                maxWidth="445px"
                width='full'
                bg='gray.600'
                rounded='md'
                marginBottom="8"
                padding='6'
                overflow='hidden'
            >
                <Heading size="sm">Your Account Details</Heading>
                <Text>
                    {account && <>{account}</>}
                </Text>
                
                <Text>
                    {chainId && <>Network: {getNetwork(chainId).name} (Chain ID = {chainId})</>}
                </Text>
                <Text>
                    {userBalance && <>Balance: {formatEther(userBalance)} ETH </>}
                </Text>
                <Text fontSize="sm">
                    Need funds: Checkout Goerli PoW Faucet
                </Text>
                <Link fontSize="sm" color="lightblue" href='https://goerli-faucet.pk910.de/' isExternal>
                    Goerli PoW Faucet <ExternalLinkIcon mx='2px' />
                </Link>
            </Box>
        ) : (
            <Text>
            Please Sign In with Wallet
        </Text>
        )
}

export default AccountStatus