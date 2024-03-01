import {
  Heading, HStack, Image,
  Link,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={4}>
        Genres
      </Heading>
      <List>
        {isLoading && <Spinner />}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />
              <Link
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize={"lg"}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
