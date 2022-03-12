import React from 'react'
import { Flex } from '@chakra-ui/react'
import Icon from "../Icon";

const SidebarLink = ({
    icon: IconContainer,
}) => {
  return (
    <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          position={"relative"}
          pb={"35px"}
          cursor={"pointer"}
        >
        <Icon from={IconContainer} color="dark-gray" />
    </Flex>
  )
}

export default SidebarLink