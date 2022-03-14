import React, { useState, useRef, useEffect } from 'react'
import { Box, Circle } from '@chakra-ui/react'
import Placeholder from './Placeholder'
import PopoverTool from './Popover'

const defaultStyleText = {
    fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
    lineHeight: "1.2",
    fontWeight: "400",
}

const styleText = {
    title: {
        ...defaultStyleText,
        lineHeight: "1.25",
        letterSpacing: "0",
        fontSize: "42px",
        paddingTop: "16px"
    },
    subtitle: {
        ...defaultStyleText,
        color: "rgba(0,0,0,.54)",
        fontSize: "28px",
        letterSpacing: "-.012em",
        lineHeight: "1.22",
        fontWeight: "300",
        marginTop: "5px",
        marginBottom: "22px"
    },
    h1: {
        ...defaultStyleText,
        fontWeight: "700",
        fontSize: "34px",
        lineHeight: "1.5",
        letterSpacing: "-.015em",
        marginTop: "45px"
    },
    h2: {
        ...defaultStyleText,
        fontWeight: "700",
        fontSize: "30px",
        lineHeight: "1.5",
        letterSpacing: "-.01em",
        marginTop: "35px"
    },
    h3: {
        ...defaultStyleText,
        fontSize: "26px",
        fontWeight: "700",
        lineHeight: "1.22",
        letterSpacing: "-.012em",
        marginTop: "31px"
    },
    p: {
        ...defaultStyleText,
        marginTop: "6px",
        lineHeight: "1.58",
        letterSpacing: "-.003em",
        fontSize: "21px"
    }
}

const TYPES = {
    TITLE: "title",
    SUBTITLE: "subtitle",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    P: "p",
}

const EditableContent = ({
    type = TYPES.P,
    placeholder = "Escribe algo",
    label,
    setLabel,
    onEnterCreateItem,
    initialFocus = false,
    id,
    styles = [],
    index = -1,
    onChangeType,
}) => {

    const refEditable = useRef(null)

    const [visibleTextarea, setVisibleTextarea] = useState(false)

    const [editing, setEditing] = useState(false);

    const onBlurEditable = ()=>{
        if(label.length < 1){
            setVisibleTextarea(false);
        }
        setEditing(false);
        setOpenPopover(false);
    }

    const [openPopover, setOpenPopover] = useState(false);

    const [isCircelEnter, setIsCircelEnter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if(refEditable.current && initialFocus){
                refEditable.current.focus();
                console.log("focus")
                // change scroll top in this position top
                window.scrollTo(0, refEditable.current.offsetTop - 100);
            }
        }, 100);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(type === TYPES.SUBTITLE && index !== 1){
            onChangeType(TYPES.H1);
        }
        if(type === TYPES.P && index === 1){
            onChangeType(TYPES.SUBTITLE);
        }
    }, [index, onChangeType, type])
    
    
  const isTitleOrSubtitle = [TYPES.TITLE, TYPES.SUBTITLE].includes(type);

  return (
    <Box position={"relative"}>
        {
            isTitleOrSubtitle && editing && (
                <div style={{
                    position: "absolute",
                    left: type === TYPES.TITLE ? "-50px" : "-75px",
                    color: "#7e7e7e"
                }}>
                    {type === TYPES.TITLE ? "Titulo" : "Subtitulo"}
                </div>
            )
        }
        {
            !isTitleOrSubtitle && (editing || isCircelEnter) && label.length === 0  && (
                <Circle 
                    border={"1px solid black"}
                    size={"40px"}
                    fontSize={"40px"}
                    fontWeight={"100"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"start"}
                    position={"absolute"}
                    left={"-50px"}
                    top={"15px"}
                    cursor={"pointer"}
                    onClick={()=>{
                        alert("GA")
                    }}
                    onMouseEnter={()=>{
                        setIsCircelEnter(true)
                    }}
                    onMouseLeave={()=>{
                        setIsCircelEnter(false)
                    }}
                >
                    <div>+</div>
                </Circle>
            )
        }
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
            borderLeft={ isTitleOrSubtitle && editing ? "1px solid rgba(0,0,0,.15)" : "none"}
            outline={"none"}
            contentEditable
            suppressContentEditableWarning
            paddingLeft={"10px"}
            paddingTop={"20px"}
            style={styleText[type]}
            position={visibleTextarea ? "relative" : "absolute"}
            top={visibleTextarea ? "0" : "-9999px"}
            onFocus={() => {
                setVisibleTextarea(true)
                setEditing(true);
            }}
            onBlur={onBlurEditable}
            onKeyDown={(e)=>{
                setTimeout(()=>{
                    const newLabel = refEditable.current.innerText;
                    setLabel(newLabel);
                }, 100)
                setOpenPopover(false);

                // if enter
                if(e.keyCode === 13){
                    refEditable.current.blur();
                    setTimeout(()=>{
                        onEnterCreateItem();
                        
                    }, 140);
                }
            }}
            // get size of letters selected with selectionStart
            onMouseUp={(e)=>{
                const selection = window.getSelection();
                const range = selection.getRangeAt(0);
                const start = range.startOffset;
                const end = range.endOffset;
                if(start !== end){
                    setOpenPopover(true);
                }
            }}
        ></Box>
        <PopoverTool 
            px={refEditable.current ? refEditable.current.offsetParent.offsetLeft : 0}
            py={refEditable.current ? refEditable.current.offsetParent.offsetTop : 0}
            isOpen={openPopover}
        />
    </Box>
  )
}

export default EditableContent