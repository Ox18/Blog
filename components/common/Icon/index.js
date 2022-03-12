import React from 'react'

const Icon = ({
    from: IconContainer,
    color= "white",
    size= "24px",
}) => {

    const colorIco = color === "dark-gray" ? "rgba(117, 117, 117, 1)" : color;

  return (
    <IconContainer
        color={colorIco}
        size={size}
    />
  )
}

export default Icon