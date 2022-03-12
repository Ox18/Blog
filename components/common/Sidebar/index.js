import React from 'react'
import { Circle, Container, Divider, Flex } from '@chakra-ui/react'
import { BiHomeAlt, BiBell, BiBookmarks, BiSpreadsheet, BiEdit } from 'react-icons/bi'
import SidebarLink from '../SidebarLink';
import CircleImageMin from '../CircleImageMin';

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
      <Container
        padding={"40px 0"}
      >
        Logo
      </Container>
      <Container>
        <SidebarLink icon={BiHomeAlt} />
        <SidebarLink icon={BiBell} />
        <SidebarLink icon={BiBookmarks} />
        <SidebarLink icon={BiSpreadsheet} />
        <SidebarLink>
          <Divider width={"24px"} borderColor="rgba(230, 230, 230, 1)" />
        </SidebarLink>
        <SidebarLink icon={BiEdit} />
      </Container>
      <Container pb="16px" 
        cursor={"pointer"}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          position={"relative"}
        >
          <CircleImageMin />
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