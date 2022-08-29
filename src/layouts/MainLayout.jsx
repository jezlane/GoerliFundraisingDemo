import { Flex } from '@chakra-ui/react'

function MainLayout (props) {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bg="gray.700"
        >
            { props.children }
        </Flex>
    )
}

export default MainLayout