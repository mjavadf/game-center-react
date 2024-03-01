import { Box, GridItem, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
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

  if (!slug) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <Collapse maxLength={500}>{game?.description_raw}</Collapse>
        <GameAttributes game={game!} />
      </GridItem>
      <GridItem>
        <GameTrailer slug={slug} />
        <GameScreenshots slug={slug} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailPage;
