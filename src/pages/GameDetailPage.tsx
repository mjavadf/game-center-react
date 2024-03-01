import { Heading, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;
