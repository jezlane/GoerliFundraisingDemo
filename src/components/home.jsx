
import { Heading } from "@chakra-ui/react"

import TransferFunds from './transferFunds.jsx'
import AccountStatus from './accountStatus.jsx'
import FundsRaised from './fundsRaised.jsx'

function Home() {
  return (
    <>
        <Heading margin="10">The Goerli Fundraising Demo</Heading>

        <AccountStatus/>
        <TransferFunds/>
        <FundsRaised/>
        
    </>
  )
}

export default Home
