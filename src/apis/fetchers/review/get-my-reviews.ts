import { API_ENDPOINT } from '@/apis/api-endpoint'
import { CredentialRequest } from '@/apis/types/common'
import { Review } from '@/apis/types/dto/review.dto'
import { apiClient } from '@/lib/api-client'

interface GetMyReviewsParams extends CredentialRequest {
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
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
    },
  })
}
