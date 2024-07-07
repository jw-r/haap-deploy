import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

export interface GetPlacePhotosParams extends NextFetchRequestConfig {
  placeId: number
}

/** API 명세가 명확하지 않음 */
type GetPlacePhotosResponse = string[]

export const getPlacePhotos = async (params: GetPlacePhotosParams) => {
  return await apiClient.fetch<GetPlacePhotosResponse>({
    ...API_ENDPOINT.place.getPlacePhotos(params.placeId),
  })
}
