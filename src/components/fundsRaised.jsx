import { Box, Heading, Text, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const FundsRaised = () => {

    const address = '0xB82e4f721ba840A4f850Ea053C9ae82295159360'
    const fundBalance = useEtherBalance(address)
    const addressShort = '0xB82e...9360'

    return (
        <Box
            maxWidth="445px"
            width='full'
            bg='gray.600'
            rounded='md'
            marginBottom="8"
            padding='6'
            overflow='hidden'
        >
            <Heading size="sm">Funds Raised at {addressShort}</Heading>
            <Text>
                {fundBalance && <>To Date: {formatEther(fundBalance)} ETH </>}
            </Text>
            <Link fontSize="sm" href='https://goerli.etherscan.io/address/0xB82e4f721ba840A4f850Ea053C9ae82295159360' isExternal>
                Check out on EtherScan <ExternalLinkIcon mx='2px' />
            </Link>
        </Box>
      )
}

export default FundsRaised