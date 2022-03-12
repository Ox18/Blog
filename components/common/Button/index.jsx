import React from 'react'
import * as Chakra from "@chakra-ui/react";

const Button = ({
    children,
    ...props
}) => {
  return (
    <Chakra.Button
        borderRadius={"99em"}
        fontWeight={"400"}
        pl={"8px"}
        pr={"8px"}
        cursor={"pointer"}
       {...props}
    >
        {children}
    </Chakra.Button>
  )
}

export default Button