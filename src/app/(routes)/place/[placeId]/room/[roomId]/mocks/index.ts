import { Rating } from '@/apis/types/dto/review.dto'

const mockRatings: Rating[] = [
  { category: 'PRICE', rating: 5 },
  { category: 'INFRA', rating: 5 },
  { category: 'POSITION', rating: 5 },
]

const mockImages = [
  'https://resources.chimhaha.net/article/1675737828075-936wx1sh72u.png',
  'https://resources.chimhaha.net/article/1675737828075-936wx1sh72u.png',
  'https://resources.chimhaha.net/article/1675737828075-936wx1sh72u.png',
  'https://resources.chimhaha.net/article/1675737828075-936wx1sh72u.png',
  'https://resources.chimhaha.net/article/1675737828075-936wx1sh72u.png',
]

type Review = {
  id: string
  author: string
  editDate: string
  ratings: Rating[]
  content: string
  images: string[]
}

const reviews: Review[] = [
  {
    id: '1',
    author: '류정우',
    editDate: '2024.05.05',
    ratings: mockRatings,
    images: [],
    content: '블라블라블라블라',
  },
  {
    id: '2',
    author: '류정우',
    editDate: '2024.05.05',
    ratings: mockRatings,
    images: mockImages,
    content: '블라블라블라블라',
  },
  {
    id: '3',
    author: '류정우',
    editDate: '2024.05.05',
    ratings: mockRatings,
    images: [],
    content: '블라블라블라블라',
  },
  {
    id: '4',
    author: '류정우',
    editDate: '2024.05.05',
    ratings: mockRatings,
    images: mockImages,
    content: '블라블라블라블라',
  },
]

export { mockRatings, mockImages, reviews }
