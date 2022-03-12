import React, { useState, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import Placeholder from './Placeholder'

const styleText = {
    title: {
        fontSize: "2.9em",
        fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
        lineHeight: "1.2",
    },
    p: {
        fontSize: "21px",
        fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
        lineHeight: "1.2",
    }
}

const TYPES = {
    P: "p",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    TITLE: "title",
}

const EditableContent = ({
    type = TYPES.TITLE,
    placeholder = "Escribe algo",
}) => {
    const [label, setLabel] = useState("");
    const [defaultText, setDefaultText] = useState("");

    const refEditable = useRef(null)

    const [visibleTextarea, setVisibleTextarea] = useState(false)

  return (
    <Box bg={"yellow.200"}>
        {
            !visibleTextarea && (
                <Box
            paddingLeft={"10px"}
            paddingTop={"20px"}
            style={styleText[type]}
            onClick={() => {
                if(refEditable.current){
                    setVisibleTextarea(true)
                    refEditable.current.focus();
                }
            }}
        >
            <Placeholder label={placeholder} />
        </Box>)
        }
        <Box
            ref={refEditable}
            borderLeft={"1px solid rgba(0,0,0,.15)"}
            outline={"none"}
            contentEditable
            suppressContentEditableWarning
            paddingLeft={"10px"}
            paddingTop={"20px"}
            style={styleText[type]}
            position={visibleTextarea ? "relative" : "absolute"}
            top={visibleTextarea ? "0" : "-9999px"}
        >
            {defaultText}
        </Box>
    </Box>
  )
}

export default EditableContent