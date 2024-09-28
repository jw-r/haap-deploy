import { API_ENDPOINT } from '@/apis/api-endpoint'
import { Rating } from '@/apis/types/dto/review.dto'
import { apiClient } from '@/lib/api-client'

interface PostReviewParams extends NextFetchRequestConfig {
  roomId: number
  content: string
  ratings: Rating[]
  accessToken: string
}

interface PostReviewResponse {}

export const postReview = async (params: PostReviewParams) => {
  return await apiClient.fetch<PostReviewResponse>({
    ...API_ENDPOINT.review.postReview(params.roomId),
    body: {
      content: params.content,
      ratings: params.ratings,
    },
    headers: {
      Authorization: `Bearer ${params?.accessToken}`,
    },
  })
}
