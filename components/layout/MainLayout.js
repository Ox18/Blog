import { Center, Container, Flex, Grid, Square } from "@chakra-ui/react";
import Sidebar from "../common/Sidebar";

const MainLayout = ({
    children,
})=>{
    return(
    <Flex direction={"row"} justifyContent={"space-between"} minHeight="100vh" maxWidth="1504px" margin={"auto"}>
        <Sidebar />
        <Container>
            sd
        </Container>
        <Container>
            sd
        </Container>
    </Flex>
    )
}
export default MainLayout;