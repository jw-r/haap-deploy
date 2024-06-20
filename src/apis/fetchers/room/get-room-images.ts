import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'

import { apiClient } from '@/lib/api-client'

interface GetRoomImagesParams extends PublicRequest {
  roomId: number
}

/** API 명세가 명확하지 않음 */
interface GetRoomImagesResponse {}

export const getRoomImages = async (params: GetRoomImagesParams) => {
  return await apiClient.fetch<GetRoomImagesResponse>({
    ...API_ENDPOINT.room.getRoomImages(params.roomId),
  })
}
