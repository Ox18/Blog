import { useState, useRef, useEffect } from "react";   
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { useForm } from "../../../hooks/useForm";

const NewElement = () => {

    const initialValue = "";

    const refEditable = useRef(null);

    const [label, setLabel] = useState(initialValue);

  const [visibleTextarea, setVisibleTextarea] = useState(false);

  const [defaultText, setDefaultText] = useState(initialValue);

  const [applyChange, setApplyChange] = useState(false);

  const onMouseEnterHeading = ()=>{
    setVisibleTextarea(true);
  }

  const onMouseLeaveHeading = ()=>{}

  const onMouseEnterTextarea = ()=>{ }

  const onMouseLeaveTextarea = ()=>{
    if(!applyChange){
        setVisibleTextarea(false);
    }
  }

  const onMouseBlurTextarea = ()=>{
    setVisibleTextarea(false);
    setDefaultText(label);
    setApplyChange(false);
}
    
  return (
    <>
        {
            visibleTextarea && (
                <Flex>
                    <span 
                        contentEditable
                        onMouseEnter={onMouseEnterTextarea}
                        onMouseLeave={onMouseLeaveTextarea}
                        onBlur={onMouseBlurTextarea}
                        style={{
                            border: "none !important",
                            resize: "none",
                            overflow: "hidden",
                            outline: "none",
                            fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
                            marginTop: "10px",
                            fontSize: "21px",
                            width: "100%",
                            lineHeight: "1.2",
                            borderLeft: "1px solid rgba(0,0,0,.15)",
                            paddingTop: "20px",
                            paddingLeft: "10px",
                        }}
                        role="textbox"
                        name="label"
                        suppressContentEditableWarning
                        ref={refEditable}
                        onKeyDown={(e)=>{
                            setTimeout(()=>{
                                setLabel(e.target.innerText);
                            }, 100);
                            if(e.keyCode === 13){
                                refEditable.current.blur();
                            }
                            setApplyChange(true);
                        }}
                    >
                        {defaultText}
                    </span>
                </Flex>
            )
        }
        {
            !visibleTextarea && (<Heading as="p" size="xl" mt="10px" fontSize={"21px"} pt={"30px"} pl={"11px"}
            onMouseEnter={onMouseEnterHeading}
            onMouseLeave={onMouseLeaveHeading}
            fontFamily={'Georgia,Cambria,"Times New Roman",Times,serif'} fontWeight={"normal"} >
                {label}
        </Heading>)
        }
        {
            !visibleTextarea && label.length === 0 && (
            <div
                onMouseEnter={onMouseEnterHeading}
                style={{
                    fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
                    fontSize: "21px",
                    fontWeight: "normal",
                    color: "rgba(0,0,0,.5)",
                }}
            >
                Escribe algo
            </div>
            )
        }
        {
            visibleTextarea && (
                <div style={{
                    fontWeight: "normal",
                    color: "rgba(0,0,0,.54)",
                    width: "40px",
                    position: "relative",
                    top: refEditable.current ? (refEditable.current.offsetHeight === 0 ? "-50px" : (refEditable.current.offsetHeight / 2 * -1 + 5)) : "-50px",
                    left: "-50px",
                }}>
                    titulo
                </div>
            )
        }
    </>
  )
}

export default NewElement