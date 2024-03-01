import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <CriticScore score={game?.metacritic || 0} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
