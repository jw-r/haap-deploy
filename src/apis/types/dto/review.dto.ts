export type Category = 'PRICE' | 'POSITION' | 'INFRA'

export interface Rating {
  category: Category
  rating: number
}

export interface Writer {
  id: number
  memberIdentity: string
}

export interface Review {
  id: number
  writer: Writer // API 명세에 작성되어 있지 않음
  content: string
  photos: string[]
  ratings: Rating[]
  createdAt: string
  updatedAt: string
}
