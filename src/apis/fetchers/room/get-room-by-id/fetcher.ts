import { API_ENDPOINT } from '@/apis/api-endpoint'

import { apiClient } from '@/lib/api-client'
import { DEFAULT_REVALIDATE } from '../../constants'

export interface GetRoomByIdParams extends NextFetchRequestConfig {
  roomId: number
}

export type GetRoomByIdResponse = {
  id: number
  name: string
  description: string
  representativePhoto: string
  averageRating: number
}

export const getRoomById = async (params: GetRoomByIdParams) => {
  return await apiClient.fetch<GetRoomByIdResponse>({
    ...API_ENDPOINT.room.getRoomById(params.roomId),
    next: {
      revalidate: DEFAULT_REVALIDATE,
    },
  })
}
