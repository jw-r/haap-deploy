import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'
import { apiClient } from '@/lib/api-client'

interface GetPlaceImagesParams extends PublicRequest {
  placeId: number
}

/** API 명세가 명확하지 않음 */
interface GetPlaceImagesResponse {}

export const getPlaceImages = async (params: GetPlaceImagesParams) => {
  return await apiClient.fetch<GetPlaceImagesResponse>({
    ...API_ENDPOINT.place.getPlaceImages(params.placeId),
  })
}
