import React from 'react'

const Placeholder = ({
  style = {},
  label,
}) => {
  return (
    <div
        style={{
            ...style,
            color: "rgba(0,0,0,.5)",
        }}
    >
      {label}
    </div>
  )
}

export default Placeholder