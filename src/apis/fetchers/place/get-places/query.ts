import { useQuery } from '@tanstack/react-query'
import { GetPlacesParams, getPlaces } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetPlacesKey = 'get-places'

export const useGetPlaces = (props: GetPlacesParams) => {
  return useQuery({
    queryKey: [GetPlacesKey, props.queryParams.address || props.queryParams.station],
    queryFn: () => getPlaces(props),
    staleTime: DEFAULT_STALE_TIME,
    enabled: !!props.queryParams.address || !!props.queryParams.station,
  })
}
