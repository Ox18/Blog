import {        Container, Flex } from "@chakra-ui/react";
import Sidebar from "../common/Sidebar";

const MainLayout = ({
    children,
})=>{
    return(
    <Flex direction={"row"} justifyContent={"space-between"} minHeight="100vh" width={"100vw"} maxWidth="1504px" margin={"auto"}>
        <Sidebar />
        <Container>
            {children}
        </Container>
        <Container width={"394px"} bg="yellowgreen">
            sd
        </Container>
    </Flex>
    )
}
export default MainLayout;