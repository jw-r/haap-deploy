import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'
import { OperatingTime, Tag } from '@/apis/types/dto/place.dto'

import { apiClient } from '@/lib/api-client'

interface GetPlaceByIdParams extends PublicRequest {
  placeId: number
  queryParams: {
    station?: string
    address?: string
    startId?: number
  }
}

interface GetPlaceByIdResponse {
  name: string
  tags: Tag[]
  operatingTime: OperatingTime
  address: string
  roadAddress: string
  url: string
  phoneNumber: string
  averageRating: number
}

export const getPlaceById = async (params: GetPlaceByIdParams) => {
  return await apiClient.fetch<GetPlaceByIdResponse>({
    ...API_ENDPOINT.place.getPlaceById(params.placeId),
    query: {
      ...params.queryParams,
    },
  })
}
