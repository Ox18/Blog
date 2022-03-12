import { Box, Divider, Flex } from '@chakra-ui/react';
import React, { useState, useRef } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useMousePosition } from '../../../hooks/useMousePosition'
import { BiBold, BiItalic, BiLink, BiText } from 'react-icons/bi'
import { RiDoubleQuotesL } from 'react-icons/ri'

const PopoverTool = ({
    isOpen,
    px,
    py,
}) => {
    const clickMeButtonRef = useRef(null);    
  return (
    <>
    {
      isOpen ? (<Popover
        isOpen={isOpen}
        positions={['top', 'right', 'left', 'bottom']}
        padding={10}
        onClickOutside={() => {}}
        ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
        content={({ position, childRect, popoverRect }) => (
    <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
      childRect={childRect}
      popoverRect={popoverRect}
      arrowColor={'blue'}
      arrowSize={10}
      className='popover-arrow-container'
      arrowClassName='popover-arrow'
      style={{
          top:  (Number(px) - 40) + "px",  
            left: py + "px",
            position: "absolute",
            background: "rgb(0,0,0)",
            background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(85,85,85,1) 100%)",
            borderRadius: "5px",
            color: "white"
      }}
    >
      <Flex flexDirection={"row"} width={"auto"} gap={"10px"} fontSize={"26px"} justifyContent={"space-between"}>
          <Box cursor={"pointer"} _hover={{ opacity: 0.7 }}>
              <BiBold />
          </Box>
          <Box cursor={"pointer"} _hover={{ opacity: 0.7 }}>
              <BiItalic />
          </Box>
          <Box cursor={"pointer"} _hover={{ opacity: 0.7 }}>
              <BiLink />
          </Box>
          <div style={{
              width: "1px",
                height: "25px",
                background: "white"
          }} />
          <Box cursor={"pointer"} _hover={{ opacity: 0.7 }}>
              <BiText />
          </Box>
          <Box cursor={"pointer"} _hover={{ opacity: 0.7 }}>
              <BiText />
          </Box>
          <Box cursor={"pointer"} _hover={{ opacity: 0.7 }}>
              <RiDoubleQuotesL />
          </Box>

      </Flex>
    </ArrowContainer>
  )}
>
  <button 
    style={{
        visibility: "hidden",
    }}
  onClick={() => {}}>
    Click me!
  </button>
</Popover>) : null
    }
    </>
  )
}

export default PopoverTool