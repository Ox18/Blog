import { Box } from "@chakra-ui/react";
import NavBarHorizontal from "../common/NavBarHorizontal";

const NewHistoryLayout = ({
  children,
}) => {
  return (
    <Box>
      <NavBarHorizontal />      
      <main>
        <article
          style={{
            position: "relative",
            minHeight: "calc(100vh - 65px)!important",
            overflow: "hidden",
          }}
        >
          {children}
        </article>
      </main>
    </Box>
  )
}

export default NewHistoryLayout