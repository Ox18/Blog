import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const NavBarHorizontal = () => {
  return (
    <Container
      bg="rgba(255,255,255,.97)!important"
      width={"100%"}
      maxWidth={"100%"}
      fontSize={"16px"}
      letterSpacing={"0px"}
      color={"rgba(0,0,0,.54)"}
      boxSizing={"border-box"}
      top={"0px"}
      position={"fixed"}
      fontWeight={"400"}
    >
      <Flex
        position={"relative"}
        maxWidth={"1032px"}
        height={"65px"}
        pl={"20px"}
        pr={"20px"}
        ml={"auto"}
        mr={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex>
          sdfsfds
        </Flex>
        <Flex>
          sds
        </Flex>
      </Flex>
    </Container>
  )
}

export default NavBarHorizontal