
import { useState } from 'react'

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
        Button, FormControl, FormLabel, Input, 
        useDisclosure } from '@chakra-ui/react'

import { useSignMessage } from '../hooks/useSignMessage'
import { useLocalStorage } from '../hooks/useStorage'

function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')

    const [register, setRegister, removeRegister] = useLocalStorage("register", false)
    const [name, setName, removeName] = useLocalStorage("name", "")
    const [email, setEmail, removeEmail] = useLocalStorage("email", "")
    
    const [baseMessage, setBaseMessage, removeBaseMessage] = useLocalStorage("baseMessage", "")
    const [baseSignedMessage, setBaseSignedMessage, removeBaseSignedMessage] = useLocalStorage("baseSignedMessage", "")
    const [baseAccount, setBaseAccount, removeBaseAccount] = useLocalStorage("baseAccount", "")

    const [message, setMessage] = useState('')
    const [ setAndSignMessage, signedMessage, signingAccount, signingStatus ] = useSignMessage()
    let button;
    const handleSigning = () => {
        const message = `I ${firstName} ${lastName} with address ${emailAddress} wish to register with Demo DApp.`
        setMessage(message)
        setAndSignMessage(message)
    }
    const handleRegister = () => {
        const fullname = `${firstName} ${lastName}`
        setRegister(true)
        setName(fullname)
        setEmail(emailAddress)

        setBaseMessage(message)
        setBaseSignedMessage(signedMessage)
        setBaseAccount(signingAccount)
        console.log("Registered")
        onClose()
    }


    return (
      <>
        <Button onClick={onOpen}>Register Today</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Register by Signing with Wallet</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input 
                        placeholder='First name'
                        value={firstName} 
                        onChange={event => setFirstName(event.currentTarget.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Last name</FormLabel>
                    <Input 
                        placeholder='Last name'
                        value={lastName}
                        onChange={event => setLastName(event.currentTarget.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input  
                        placeholder='Email Address' 
                        value={emailAddress}   
                        onChange={event => setEmailAddress(event.currentTarget.value)}
                    />
                </FormControl>
            </ModalBody>
  
            <ModalFooter>
            {(signingStatus == "Signed")
                ? <Button onClick={handleRegister} colorScheme='blue' mr={3}>Register</Button>
                : <Button onClick={handleSigning} colorScheme='blue' mr={3}>Sign</Button>
            }
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default Register