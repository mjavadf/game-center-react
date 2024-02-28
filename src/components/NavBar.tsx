import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";

function NavBar() {
  return <HStack padding={"10px"}>
    <Image src={logo} boxSize="40px"/>
    <SearchInput />
    <ColorModeSwitch />
  </HStack>;
}

export default NavBar;
