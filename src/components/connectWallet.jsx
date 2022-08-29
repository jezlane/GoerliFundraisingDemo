import { ButtonGroup, Button } from "@chakra-ui/react";
import { useEthers } from '@usedapp/core'
import { useLocalStorage } from '../hooks/useStorage'

import Register from './register.jsx'

const ConnectWallet = () => {

    const { activateBrowserWallet, deactivate, account } = useEthers()
    const [register, setRegister, removeRegister] = useLocalStorage("register", false)
    return account ?
        (
            <ButtonGroup gap='2'>
                {register ? <></> : <Register />}
                <Button onClick={() => deactivate()}>
                    Disconnect your Wallet
                </Button>
            </ButtonGroup>
        ) : (
            <ButtonGroup gap='2'>
                <Button onClick={() => activateBrowserWallet()}>
                    Connect your Wallet
                </Button>
            </ButtonGroup>
        )
}

export default ConnectWallet