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
      <Container pb="16px">
        <Image 
          src={"/images/profile/profile.jpg"} 
          size="100px" 
          rounded="full" 
          alt='profile'
          loading={"lazy"}
        />
      </Container>
    </Flex>
  )
}

export default Sidebar