import React, { useState } from 'react'
import * as ColorUtil from "../../../util/Color.util"

const Icon = ({
    from: IconContainer,
    color= "dark-gray",
    size= "24px",
    colorHover= "black",
    controlled= false,
    controlledActive= null,
    ...props
}) => {

    const [activeColor, setActiveColor] = useState(false);

    const colorNormal = ColorUtil.GuessColor(color);
    const colorOnHover = ColorUtil.GuessColor(colorHover);

    const handleMouseEnter = () => {
        setActiveColor(true);
    }

    const handleMouseLeave = () => {
        setActiveColor(false);
    }

    const style = {
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
    }

  return (
    <IconContainer
        color={controlled ? controlledActive : activeColor ? colorOnHover : colorNormal}
        size={size}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}
        {...props}
    />
  )
}

export default Icon