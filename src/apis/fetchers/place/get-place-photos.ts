import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface GetPlacePhotosParams extends NextFetchRequestConfig {
  placeId: number
}

/** API 명세가 명확하지 않음 */
interface GetPlacePhotosResponse {}

export const getPlacePhotos = async (params: GetPlacePhotosParams) => {
  return await apiClient.fetch<GetPlacePhotosResponse>({
    ...API_ENDPOINT.place.getPlacePhotos(params.placeId),
  })
}
