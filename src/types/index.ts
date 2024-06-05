export interface Room {
  id: number
  name: string
  rate: number
  representationImage: string
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
