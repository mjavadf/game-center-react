import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Box padding={"10px"}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
