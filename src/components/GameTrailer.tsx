import React from 'react'
import useTrailers from '../hooks/useTrailers';
interface Props {
  slug: string;
}
function GameTrailer({slug}: Props) {
  
  const { data, isLoading, error } = useTrailers(slug!);

  const firstTrailer = data?.results[0]
  if (!firstTrailer) return null

  return (
    <video 
    src={firstTrailer.data[480]}
    poster={firstTrailer.preview}
    controls/>
  )
}

export default GameTrailer