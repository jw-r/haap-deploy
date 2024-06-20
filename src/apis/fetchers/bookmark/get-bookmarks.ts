import { API_ENDPOINT } from '@/apis/api-endpoint'
import { CredentialRequest } from '@/apis/types/common'
import { Tag } from '@/apis/types/dto/place.dto'
import { apiClient } from '@/lib/api-client'

interface GetBookmarksParams extends CredentialRequest {}

type GetBookmarksResponse = {
  id: number
  name: string
  tags: Tag[]
  simpleAddress: string
  representationImage: string
  comment: string
}[]

export const getBookmarks = async (params: GetBookmarksParams) => {
  return await apiClient.fetch<GetBookmarksResponse>({
    ...API_ENDPOINT.bookmark.getBookmarks(),
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
    },
  })
}
