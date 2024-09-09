import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

export interface GetRoomsByPlaceIdParams extends NextFetchRequestConfig {
  placeId: number
}

type GetRoomsByPlaceIdResponse = {
  id: number
  name: string
  description: string
  representativePhoto: string
  averageRating: number
}[]

export const getRoomsByPlaceId = async (params: GetRoomsByPlaceIdParams) => {
  return await apiClient.fetch<GetRoomsByPlaceIdResponse>({
    ...API_ENDPOINT.room.getRoomsByPlaceId(params.placeId),
  })
}
