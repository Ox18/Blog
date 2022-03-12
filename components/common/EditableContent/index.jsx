import { useState } from "react";   
import { Heading } from "@chakra-ui/react";
import { useForm } from "../../../hooks/useForm";

const EditableContent = () => {

  const [values, handleChange] = useForm({
    label: "gaa"
  });

  const [visibleTextarea, setVisibleTextarea] = useState(false);

  const { label } = values; 

  const onMouseEnterHeading = ()=>{
    setVisibleTextarea(true);
  }

  const onMouseLeaveHeading = ()=>{}

  const onMouseEnterTextarea = ()=>{ }

  const onMouseLeaveTextarea = ()=>{
  }

  const onMouseBlurTextarea = ()=>{
    setVisibleTextarea(false);
}

  return (
    <>
        {
            visibleTextarea && (
                <textarea
                        onMouseEnter={onMouseEnterTextarea}
                        onMouseLeave={onMouseLeaveTextarea}
                        onBlur={onMouseBlurTextarea}
                        style={{
                            border: "none !important",
                            resize: "none",
                            overflow: "hidden",
                            outline: "none",
                            fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
                            mt: "10px",
                            fontSize: "2.25rem",
                            width: "100%",
                            lineHeight: "1.2",
                        }}
                        onChange={handleChange}
                        name="label"
                        value={label}
                        />
            )
        }
        {
            !visibleTextarea && (
                <Heading as="h3" size="xl" mt="10px" 
            onMouseEnter={onMouseEnterHeading}
            onMouseLeave={onMouseLeaveHeading}
            fontFamily={'Georgia,Cambria,"Times New Roman",Times,serif'} fontWeight={"normal"} >
            {label}
        </Heading>
            )
        }
    </>
  )
}

export default EditableContent