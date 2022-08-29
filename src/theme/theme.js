import { extendTheme } from '@chakra-ui/react'

import Heading from './Heading'
import Text from './Text'
import Link from './Link'



const customTheme = extendTheme({
    components: {
      Heading,
      Text,
      Link,
    },
})

export default customTheme