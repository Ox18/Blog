import { useState } from "react";   
import { Heading } from "@chakra-ui/react";
import { useForm } from "../../../hooks/useForm";

const EditableContent = () => {

  const [values, handleChange] = useForm({
    label: ""
  });

  const { label } = values; 


  return (
    <>
        <Heading as="h3" size="xl" mt="10px" fontFamily={'Georgia,Cambria,"Times New Roman",Times,serif'} fontWeight={"normal"} >
            {label}
        </Heading>
        <textarea
            style={{
                border: "none !important",
                resize: "none",
                overflow: "hidden",
                outline: "none",
                fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
                mt: "10px",
                fontSize: "2.25rem",
                width: "100%",
            }}
            onChange={handleChange}
            name="label"
            value={label}
            />
    </>
  )
}

export default EditableContent