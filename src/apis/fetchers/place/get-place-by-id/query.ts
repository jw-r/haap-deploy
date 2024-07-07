import { useQuery } from '@tanstack/react-query'
import { GetPlaceByIdParams, getPlaceById } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetPlaceByIdKey = 'get-place-by-id'

export const useGetPlaceByIdQuery = (props: GetPlaceByIdParams) => {
  return useQuery({
    queryKey: [GetPlaceByIdKey, props.placeId],
    queryFn: () => getPlaceById(props),
    staleTime: DEFAULT_STALE_TIME,
  })
}
