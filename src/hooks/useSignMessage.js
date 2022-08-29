import { useState } from 'react'
import { useEthers } from '@usedapp/core'

export function useSignMessage() {

    const [rawMessage, setRawMessage ] = useState('')
    const [account, setAccount ] = useState('')
    const [signedMessage, setSignedMessage ] = useState('')
    const [status, setStatus ] = useState("None")

    const { library } = useEthers()

    function handleSignError(err) {
        setStatus("Cancelled")
        console.log('Signature Cancelled');
        console.log(err);
    }
    async function onSign(msg) {
        const signer = await library.getSigner();
        const signedMsg = await signer.signMessage(msg).catch(handleSignError)
        if (signedMsg) {
            setSignedMessage(signedMsg)
            const signAccount = await signer.getAddress()
            setAccount(signAccount)
            setStatus("Signed")
        }

    }
    function setAndSignMessage(msg) {
        setStatus("In Progress")
        setRawMessage(msg)
        onSign(msg)
    }
    
    return [setAndSignMessage, signedMessage, account, status]
}
