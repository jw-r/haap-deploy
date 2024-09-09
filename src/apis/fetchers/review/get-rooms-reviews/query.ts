import { useQuery } from '@tanstack/react-query'
import { GetRoomsReviewsParams, getRoomsReviews } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetRoomsReviewsKey = 'get-rooms-reviews'

export const useGetRoomsReviewsQuery = (props: GetRoomsReviewsParams) => {
  return useQuery({
    queryKey: [GetRoomsReviewsKey, props.queryParams.roomIds?.join('-')],
    queryFn: () => getRoomsReviews(props),
    staleTime: DEFAULT_STALE_TIME,
  })
}
