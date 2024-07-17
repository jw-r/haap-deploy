export type Date = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export type OperatingTime = Record<Date, string | null>

export type Tag = '방음좋은' | '역세권'

export interface SimplePlace {
  id: number
  name: string
  tags: Tag[]
  simpleAddress: string
  representationImage: string
  latitude: number
  longitude: number
  averageRating: number
}
