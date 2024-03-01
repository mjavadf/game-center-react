import { Grid, GridItem, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import useScreenshots from '../hooks/useScreenshots'

interface Props {
  slug: string;
}

function GameScreenshots({slug}: Props) {
  const {data, error} = useScreenshots(slug)

  const images = data?.results
  if (!images) return null

  if (error) return null;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
      {images.map(file => (
          <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots