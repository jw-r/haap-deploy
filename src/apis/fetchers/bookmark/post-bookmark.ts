import { API_ENDPOINT } from '@/apis/api-endpoint'
import { CredentialRequest } from '@/apis/types/common'
import { apiClient } from '@/lib/api-client'

interface PostBookmarkParams extends CredentialRequest {
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
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
    },
  })
}
