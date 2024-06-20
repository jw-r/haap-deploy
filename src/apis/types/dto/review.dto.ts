export interface Rating {
  category: 'price' | 'position' | 'infra'
  rating: number
}

export interface Review {
  id: number
  writer?: object // API 명세에 작성되어 있지 않음
  content: string
  photos: string[]
  ratings: Rating[]
  createdAt: string
  updatedAt: string
}
