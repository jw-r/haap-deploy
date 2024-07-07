import { useQuery } from '@tanstack/react-query'
import { GetPlacePhotosParams, getPlacePhotos } from './fetcher'
import { DEFAULT_STALE_TIME } from '../../constants'

const GetPlaceImagesKey = 'get-place-images'

export const useGetPlaceImagesQuery = (props: GetPlacePhotosParams) => {
  return useQuery({
    queryKey: [GetPlaceImagesKey, props.placeId],
    queryFn: () => getPlacePhotos(props),
    staleTime: DEFAULT_STALE_TIME,
  })
}
