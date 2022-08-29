import { Flex } from '@chakra-ui/react'

function HeaderLayout (props) {
    return (
        <Flex
            minWidth='max-content' 
            alignItems='center' 
            gap='2'
            padding='3'
            bg="gray.500"
        >
            { props.children }
        </Flex>
    )
}

export default HeaderLayout