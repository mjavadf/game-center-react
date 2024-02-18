import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGenres();
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={4}>Genres</Heading>
      <List>
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={'cover'}
              />
              <Link
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"lg"}
                onClick={() => onSelectGenre(genre)}
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
