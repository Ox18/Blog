import { Box, Container, Flex } from '@chakra-ui/react'
import CircleImageMin from '../CircleImageMin'
import Icon from '../Icon'
import { BiBell, BiDotsHorizontalRounded } from 'react-icons/bi'
import Button from '../Button'

const NavBarHorizontal = () => {
  return (
    <>
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
      zIndex={"500"}
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
          Logo
        </Flex>
        <Flex
          alignItems={"center"}
        >
          <Flex pl={"8px"} pr={"8px"} height={"65px"} alignItems={"center"} justifyContent={"center"}>
            <Button size={"xs"} fontSize={"15px"} color="white" bg="#1a8917" >
              Publicar
            </Button>
          </Flex>
          <Flex pl={"8px"} pr={"8px"} height={"65px"} alignItems={"center"} justifyContent={"center"}>
            <Icon from={BiDotsHorizontalRounded} />
          </Flex>
          <Flex pl={"8px"} pr={"8px"} height={"65px"} alignItems={"center"} justifyContent={"center"}>
            <Icon from={BiBell} />
          </Flex>
          <Flex pl={"8px"} pr={"8px"} height={"65px"} alignItems={"center"} justifyContent={"center"}>
            <CircleImageMin />
          </Flex>
        </Flex>
      </Flex>
    </Container>
    <Box
      position={"relative"}
      zIndex={"100"}
      width={"100%"}
      bg="#fff"
      top="0"
      height="65px"
    />
    </>
  )
}

export default NavBarHorizontal