import {
  SimpleGrid,
  Spinner,
  Text
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GamesGrid() {

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
      <InfiniteScroll
        dataLength={fetchedGamesCount} //This is important field to render the next data
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner marginY={5} />}
      >
        <SimpleGrid
          column={3}
          spacing={10}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding={3}
        >
          {isLoading &&
            skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) =>
            page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          )}
        </SimpleGrid>
      </InfiniteScroll>
  );
}

export default GamesGrid;
