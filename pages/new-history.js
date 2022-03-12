import { useState } from "react";
import { Box } from "@chakra-ui/react";
import EditableContent from "../components/common/EditableContent";
import NewHistoryLayout from "../components/layout/NewHistoryLayout";

const initialState = [
    {
        id: Date.now(),
        label: "",
        type: "title",
        placeholder: "Titulo 1 (Opcional)",
    },
    {
        id: Date.now() + 1,
        label: "",
        type: "subtitle",
        placeholder: "Subtitulo 1 (Opcional)",
    },
    {
        id: Date.now() + 2,
        label: "",
        type: "h1",
        placeholder: "Titulo 2",
    },
    {
        id: Date.now() + 3,
        label: "",
        type: "h2",
        placeholder: "Titulo 3",
    },
    {
        id: Date.now() + 4,
        label: "",
        type: "h3",
        placeholder: "Titulo 4",
    },
    {
        id: Date.now() + 5,
        label: "",
        type: "p",
        placeholder: "Texto",
    }
]

export default function NewHistory() {

    const [items, setItems] = useState(initialState);

    const onEnterCreateItem = (idItem)=>{
        const newItem = {
            id: Date.now(),
            label: "",
            type: "p",
            placeholder: "Texto",
            initialFocus: true
        };

        // add item with slice by idItem
        const itemPositionIndex = items.findIndex(item => item.id === idItem);
        // add item and sort by id
        const firstItems = items.slice(0, itemPositionIndex + 1);
        const lastItems = items.slice(itemPositionIndex + 1);
        const newItems = [...firstItems, newItem, ...lastItems];
        setItems(newItems);
    }

    return(
    <NewHistoryLayout>
        <Box mt={"20px"} pt={"0px"} pb={"5px"}>
            <Box pb={"45px"} maxW={"740px"} pl={"20px"} margin={"0 auto"} width={"100%"} pr={"20px"}>
                
                {
                    items.map(item => (
                        <EditableContent
                            key={item.id}
                            {...item}
                            setLabel={(label) => {
                                setItems(items.map(i => i.id === item.id ? {...i, label} : i))
                            }}
                            onEnterCreateItem={()=>{
                                onEnterCreateItem(item.id)
                            }}
                        />
                    ))
                }
            </Box>
        </Box>
    </NewHistoryLayout>)
}