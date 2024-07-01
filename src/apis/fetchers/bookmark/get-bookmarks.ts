import { API_ENDPOINT } from '@/apis/api-endpoint'
import { Tag } from '@/apis/types/dto/place.dto'
import { apiClient } from '@/lib/api-client'

type GetBookmarksResponse = {
  id: number
  name: string
  tags: Tag[]
  simpleAddress: string
  representationImage: string
  comment: string
}[]

export const getBookmarks = async () => {
  return await apiClient.fetch<GetBookmarksResponse>({
    ...API_ENDPOINT.bookmark.getBookmarks(),
  })
}
