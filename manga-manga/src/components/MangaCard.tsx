import React from 'react'
import { Daum } from '../types/mangaDataType'

interface MangaCardProps { 
data: Daum,
}

const cleanUpDescription = (description: string) => {
  const maxLength = 200;
  if (description.length >= maxLength) {
    description = description.substring(0, maxLength).concat("...")
  }
  return description;
}


function MangaCard({data}: MangaCardProps) {
  return (
    <div className='card'>
      <h1>{data.attributes.title.en}</h1>
      <p>{cleanUpDescription(data.attributes.description.en)}</p>
    </div>
  )
}

export default MangaCard