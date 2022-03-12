import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const ContentItemStorie = ({
    children,
}) => {
  return (
    <Flex 
      p={0}
      justifyContent={"center"}
    >
      <Container 
        p={0}
        maxW={"692px"}
        margin={"0 32px"}
        width={"100%"}
        minWidth={"0"}
      >
        {children}
      </Container>
    </Flex>
  )
}

export default ContentItemStorie