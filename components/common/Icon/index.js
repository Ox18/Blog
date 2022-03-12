import React, { useState } from 'react'
import * as ColorUtil from "../../../util/Color.util"

const Icon = ({
    from: IconContainer,
    color= "white",
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