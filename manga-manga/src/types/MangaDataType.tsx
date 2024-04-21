export interface MangaDataType {
  result: string
  response: string
  data: Daum[]
  limit: number
  offset: number
  total: number
}

export interface Daum {
  id: string
  type: string
  attributes: Attributes
  relationships: Relationship[]
}

export interface Attributes {
  title: Title
  altTitles: AltTitle[]
  description: Description
  isLocked: boolean
  links: Links
  originalLanguage: string
  lastVolume: string
  lastChapter: string
  publicationDemographic: any
  status: string
  year?: number
  contentRating: string
  tags: Tag[]
  state: string
  chapterNumbersResetOnNewVolume: boolean
  createdAt: string
  updatedAt: string
  version: number
  availableTranslatedLanguages: string[]
  latestUploadedChapter: string
}

export interface Title {
  en: string
}

export interface AltTitle {
  en?: string
  pl?: string
  ja?: string
  "pt-br"?: string
}

export interface Description {
  en: string
  pl?: string
  "pt-br"?: string
  fr?: string
  ro?: string
}

export interface Links {
  ap?: string
  engtl?: string
  raw?: string
  kt?: string
}

export interface Tag {
  id: string
  type: string
  attributes: Attributes2
  relationships: any[]
}

export interface Attributes2 {
  name: Name
  description: Description2
  group: string
  version: number
}

export interface Name {
  en: string
}

export interface Description2 {}

export interface Relationship {
  id: string
  type: string
  related?: string
}
