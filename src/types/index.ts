export interface Room {
  id: number
  name: string
  averageRating: number
  representativePhoto: string
  description?: string
  comments?: string
}

export interface Place {
  id: number
  name: string
  tags: string[]
  simpleAddress: string
  representationImage: string
  latitude: number
  longitude: number
}
