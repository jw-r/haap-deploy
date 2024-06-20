import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'
import { Tag } from '@/apis/types/dto/place.dto'
import { apiClient } from '@/lib/api-client'

interface GetPlacesParams extends PublicRequest {
  queryParams: {
    station?: string
    address?: string
    startId?: number
  }
}

type GetPlacesResponse = {
  id: number
  name: string
  tags: Tag[]
  simpleAddress: string
  representativePhoto: string
  latitude: number
  longitude: number
  averageRating: number
}[]

export const getPlaces = async (params: GetPlacesParams) => {
  return await apiClient.fetch<GetPlacesResponse>({
    ...API_ENDPOINT.place.getPlaces(),
    query: {
      ...params.queryParams,
    },
  })
}
