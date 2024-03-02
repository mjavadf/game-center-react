import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

function NavBar() {
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  return (
    <HStack padding={"10px"}>
      <Link to={"/"} onClick={() => {setSearchText("")}}>
        <Image src={logo} boxSize="40px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
