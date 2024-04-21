import React from "react";
import { MangaDataType } from "../types/mangaDataType";


export const useGetMangaData = () => {
  const api = 'https://api.mangadex.org/manga?limit=10&includedTagsMode=AND&excludedTagsMode=OR&originalLanguage%5B%5D=en&publicationDemographic%5B%5D=none&contentRating%5B%5D=safe&order%5BlatestUploadedChapter%5D=desc'

  const [mangaData, setMangaData] = React.useState<MangaDataType | undefined>(undefined);

  const getMangaData = async () => {
    const body = await fetch(api);
    const data = await body.json();
    setMangaData(data);
  }
  return {getMangaData, mangaData};
}

