import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxLength: number;
}

function Collapse({ children, maxLength = 100 }: Props) {
  const [show, setShow] = React.useState(false);

  const actualText = children?.toString();
  const slicedText = actualText?.substring(0, maxLength) + " ...";

  if (!children) return null

  return (
    <Text>
      {show ? actualText : slicedText}
      <Button
        size="xs"
        fontWeight={"bold"}
        marginLeft={2}
        onClick={() => setShow(!show)}
        colorScheme={"yellow"}
      >
        Show {show ? "Less" : "More"}
      </Button>
    </Text>
  );
}

export default Collapse;
