import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface PostBookmarkParams extends NextFetchRequestConfig {
  roomId: number
  comment?: string
}

interface PostBookmarkResponse {}

export const postBookmark = async (params: PostBookmarkParams) => {
  return await apiClient.fetch<PostBookmarkResponse>({
    ...API_ENDPOINT.bookmark.postBookmark(),
    body: {
      roomId: params.roomId,
      comment: params.comment,
    },
  })
}
