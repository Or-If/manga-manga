import { useEffect, useState } from 'react'
import { useGetMangaData } from './hooks/useGetMangaData'
import './App.css'
import MangaCard from './components/MangaCard'

function App() {

  const {getMangaData, mangaData} = useGetMangaData()

  useEffect(() => {
    getMangaData()
  }, [])


  const mangaMap = mangaData?.data.map((d) => {
    return <MangaCard data={d}></MangaCard>
  })

  return (
    <div className='card-container'>
      {mangaMap}
    </div>
  )
}

export default App
