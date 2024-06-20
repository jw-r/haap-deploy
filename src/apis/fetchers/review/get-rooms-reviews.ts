import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'
import { Review } from '@/apis/types/dto/review.dto'
import { apiClient } from '@/lib/api-client'

interface GetRoomsReviewsParams extends PublicRequest {
  queryParams: {
    roomIds?: number[]
    startId?: number
  }
}

type GetRoomsReviewsResponse = Review[]

export const getRoomsReviews = async (params: GetRoomsReviewsParams) => {
  return await apiClient.fetch<GetRoomsReviewsResponse>({
    ...API_ENDPOINT.review.getRoomsReviews(),
    query: {
      ...params.queryParams,
      roomIds: params.queryParams.roomIds?.join(','),
    },
  })
}
