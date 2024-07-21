import { useQuery } from '@tanstack/react-query'
import { GetRoomsReviewsParams, getRoomsReviews } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetPlaceByIdKey = 'get-place-by-id'

export const useGetPlaceByIdQuery = (props: GetRoomsReviewsParams) => {
  return useQuery({
    queryKey: [GetPlaceByIdKey, props.queryParams.roomIds?.join('-')],
    queryFn: () => getRoomsReviews(props),
    staleTime: DEFAULT_STALE_TIME,
  })
}
