import { Circle, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const imagePic = require("../../../assets/images/profile.jpg");

const Sidebar = () => {
  return (
    <Flex 
      width="80px" 
      padding={"0.5"} 
      minHeight={"max-content"} 
      borderRight="1px solid rgba(230, 230, 230, 1)"
      justifyContent={"space-between"}
      direction={"column"}
      alignItems={"center"}
      >
      <div>a</div>
      <div>b</div>
      {/* <Container pb="16px">
        <Image 
          src={"/images/profile/profile.jpg"} 
          width="32px"
          height="32px"
          rounded="full" 
          alt='profile'
          loading={"lazy"}
        />
        <Circle
          size={"32px"}
          bg="yellow"
        />
      </Container> */}
      <Container pb="16px">
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          position={"relative"}
        >
          <Image
            src={"/images/profile/profile.jpg"}
            width="32px"
            height="32px"
            alt='profile'
            loading={"lazy"}
            rounded="full"
          />
          <Circle
            width="32px"
            height="32px"
            position={"absolute"}
            rounded="full"
            boxShadow={"rgb(0 0 0 / 5%) 0px 0px 0px 1px inset"}
          />
        </Flex>
      </Container>
    </Flex>
  )
}

export default Sidebar