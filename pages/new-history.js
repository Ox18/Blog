import { Box } from "@chakra-ui/react";
import EditableContent from "../components/common/EditableContent";
import EditableContentTitle from "../components/common/EditableContent/Title";
import NewHistoryLayout from "../components/layout/NewHistoryLayout";

export default function NewHistory() {
    return(
    <NewHistoryLayout>
        <Box mt={"20px"} pt={"0px"} pb={"5px"}>
            <Box maxW={"740px"} pl={"20px"} margin={"0 auto"} width={"100%"} pr={"20px"}>
                <EditableContentTitle />
            </Box>
        </Box>
    </NewHistoryLayout>)
}