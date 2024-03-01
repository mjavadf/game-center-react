import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import useTrailers from "../hooks/useTrailers";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) <Spinner />;

  if (error) throw error;

  if (!slug) return null

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Collapse maxLength={200}>{game?.description_raw}</Collapse>
      <GameAttributes game={game!} />
      <GameTrailer slug={slug} />
      <GameScreenshots slug={slug} />
    </>
  );
}

export default GameDetailPage;
