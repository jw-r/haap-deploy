import { API_ENDPOINT } from '@/apis/api-endpoint'
import { Review } from '@/apis/types/dto/review.dto'
import { apiClient } from '@/lib/api-client'

interface GetMyReviewsParams extends NextFetchRequestConfig {
  queryParams: {
    startId?: number
  }
}

type GetMyReviewsResponse = Review[]

export const getMyReviews = async (params: GetMyReviewsParams) => {
  return await apiClient.fetch<GetMyReviewsResponse>({
    ...API_ENDPOINT.review.getMyReviews(),
    query: {
      ...params.queryParams,
    },
  })
}
