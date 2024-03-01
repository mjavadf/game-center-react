import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameHeading from '../components/GameHeading'
import GamesGrid from '../components/GamesGrid'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        {" "}
        {/* Only show on large screen */}
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={2}>
          <GameHeading />
          <HStack spacing={3} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage