type Rating = {
  id: string
  rate: number
  label: string
}

const mockRatings: Rating[] = [
  { id: 'price', rate: 5, label: '가격' },
  { id: 'facilities', rate: 5, label: '시설' },
  { id: 'location', rate: 5, label: '위치' },
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
