import { useQuery } from '@tanstack/react-query'
import { GetPlacesParams, getPlaces } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetPlacesKey = 'get-places'

export const useGetPlaces = (props: GetPlacesParams) => {
  return useQuery({
    queryKey: [GetPlacesKey],
    queryFn: () => getPlaces(props),
    staleTime: DEFAULT_STALE_TIME,
  })
}
