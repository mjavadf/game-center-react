import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"

function Navbar() {
  return <HStack> {/* Horizontal stack */}
    <Image src={logo} boxSize="40px"/>
    <Text>Navigation Bar</Text>
  </HStack>;
}

export default Navbar;
