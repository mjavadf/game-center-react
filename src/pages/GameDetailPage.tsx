import { Button, Heading, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import useGame from "../hooks/useGame";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Collapse maxLength={200} isOpen={show}>
        {game?.description_raw}
      </Collapse>
    </>
  );
}

export default GameDetailPage;
