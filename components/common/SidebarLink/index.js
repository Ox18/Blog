import React, { useRef, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Icon from "../Icon";

const SidebarLink = ({
    icon: IconContainer,
    children
}) => {

  const refIcon = useRef(null);

  const [controlledActive, setControlledActive] = useState(false);

  const handleMouseEnter = () => {
    setControlledActive(true);
  }

  const handleMouseLeave = () => {
    setControlledActive(false);
  }

  return (
    <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          position={"relative"}
          pb={"35px"}
          cursor={"pointer"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        {
          IconContainer && <Icon from={IconContainer} color="dark-gray" useRef={refIcon} controlled={controlledActive} />
        }
        {
          children && <>{children}</>
        }
    </Flex>
  )
}

export default SidebarLink