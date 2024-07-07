import { useQuery } from '@tanstack/react-query'
import { GetRoomsByPlaceIdParams, getRoomsByPlaceId } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetRoomsByPlaceIdKey = 'get-rooms-by-place'

export const useGetRoomsByPlaceId = (props: GetRoomsByPlaceIdParams) => {
  return useQuery({
    queryKey: [GetRoomsByPlaceIdKey, props.placeId],
    queryFn: () => getRoomsByPlaceId(props),
    staleTime: DEFAULT_STALE_TIME,
  })
}
