import { API_ENDPOINT } from '@/apis/api-endpoint'

import { apiClient } from '@/lib/api-client'

interface GetRoomPhotosParams extends NextFetchRequestConfig {
  roomId: number
}

/** API 명세가 명확하지 않음 */
interface GetRoomPhotosResponse {}

export const getRoomPhotos = async (params: GetRoomPhotosParams) => {
  return await apiClient.fetch<GetRoomPhotosResponse>({
    ...API_ENDPOINT.room.getRoomPhotos(params.roomId),
  })
}
