import { API_ENDPOINT } from '@/apis/api-endpoint'
import { SimplePlace } from '@/apis/types/dto/place.dto'
import { apiClient } from '@/lib/api-client'

export interface GetPlacesParams extends NextFetchRequestConfig {
  queryParams: {
    station?: string
    address?: string
    startId?: number
  }
}

type GetPlacesResponse = SimplePlace[]

export const getPlaces = async (params: GetPlacesParams) => {
  return await apiClient.fetch<GetPlacesResponse>({
    ...API_ENDPOINT.place.getPlaces(),
    query: {
      ...params.queryParams,
    },
  })
}
