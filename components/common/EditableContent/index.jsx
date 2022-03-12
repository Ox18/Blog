import { useState, useRef, useEffect } from "react";   
import { Heading } from "@chakra-ui/react";
import { useForm } from "../../../hooks/useForm";

const EditableContent = () => {

    const initialValue = "Titulo";

    const refEditable = useRef(null);

    const [label, setLabel] = useState(initialValue);

  const [visibleTextarea, setVisibleTextarea] = useState(false);

  const [defaultText, setDefaultText] = useState(initialValue);

  const onMouseEnterHeading = ()=>{
    setVisibleTextarea(true);
  }

  const onMouseLeaveHeading = ()=>{}

  const onMouseEnterTextarea = ()=>{ }

  const onMouseLeaveTextarea = ()=>{
  }

  const onMouseBlurTextarea = ()=>{
    setVisibleTextarea(false);
    setDefaultText(label);
}
    
  return (
    <>
        {
            visibleTextarea && (
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
                        fontSize: "2.25rem",
                        width: "100%",
                        lineHeight: "1.2",
                    }}
                    role="textbox"
                    name="label"
                    suppressContentEditableWarning
                    ref={refEditable}
                    onKeyDown={(e)=>{
                        setTimeout(()=>{
                            setLabel(e.target.innerText);
                        }, 100);
                    }}
                >
                    {defaultText}
                </span>
            )
        }
        {
            !visibleTextarea && (<Heading as="h3" size="xl" mt="10px" 
            onMouseEnter={onMouseEnterHeading}
            onMouseLeave={onMouseLeaveHeading}
            fontFamily={'Georgia,Cambria,"Times New Roman",Times,serif'} fontWeight={"normal"} >
                {label}
        </Heading>)
        }
    </>
  )
}

export default EditableContent