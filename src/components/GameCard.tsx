import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      _hover={{
        background: "gray.600",
        transition: "transform .15s ease-in",
      }}
    >
      <Link to={`/games/${game.slug}`}><Image src={getCroppedImageUrl(game.background_image)} /></Link>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
