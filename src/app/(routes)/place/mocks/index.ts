interface Place {
  id: number
  name: string
  tags: string[]
  simpleAddress: string
  representationImage: string
  latitude: number
  longitude: number
}

export const mockingPlaceList: Place[] = [
  {
    id: 1,
    name: '판교의 집',
    tags: ['방음 좋음', '넓음'],
    simpleAddress: '',
    representationImage: '',
    latitude: 37.5262411,
    longitude: 126.99289439,
  },
  {
    id: 2,
    name: '좋은 합주실',
    tags: ['가성비', '넓음'],
    simpleAddress: '',
    representationImage: '',
    latitude: 37.5272411,
    longitude: 126.98289439,
  },
]
