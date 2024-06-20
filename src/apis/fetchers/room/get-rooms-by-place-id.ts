import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'

import { apiClient } from '@/lib/api-client'

interface GetRoomsByPlaceIdParams extends PublicRequest {
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
