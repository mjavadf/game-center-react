import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  term: string;
}

function DefinitionItem({ children, term }: Props) {
  return (
    <Box marginY={5}>
      <Heading as="dt" size={"md"} color={"gray.600"}>
        {term}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
}

export default DefinitionItem;
