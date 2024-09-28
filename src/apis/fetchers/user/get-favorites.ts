import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'
import { Tag } from '@/apis/types/dto/place.dto'

interface GetFavoritesRequest {
  accessToken: string
}

type GetFavoritesResponse = {
  roomId: number
  name: string
  tags: Tag
  simpleAddress: string
  representationImage: string
  comment: string
}[]

export const getFavorites = async (params: GetFavoritesRequest) => {
  return await apiClient.fetch<GetFavoritesResponse>({
    ...API_ENDPOINT.user.getFavorites(),
    headers: {
      Authorization: `Bearer ${params?.accessToken}`,
    },
  })
}
