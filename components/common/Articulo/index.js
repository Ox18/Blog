import { Flex, Center, Text, Square, Box } from '@chakra-ui/react'
import React from 'react'

const Articulo = () => {
  return (
    <Flex color='white' direction={"column"}>
        <Box flex='1' bg='green.500'>
            <Text>Box 3</Text>
        </Box>
        <Box flex='1' bg="green.200">
            <Text>Box 3</Text>
        </Box>
        <Box flex='1' bg='green'>
            <Text>Box 3</Text>
        </Box>
    </Flex>
  )
}

export default Articulo