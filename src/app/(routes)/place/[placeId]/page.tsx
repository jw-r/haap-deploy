import Header from '@/components/ui/header'
import TabNav from '@/components/ui/tab-nav'
import PlacePhotos from './components/place-photos'
import PlaceReviews from './components/place-review'
import PlaceInfo from './components/place-info'
import PlaceRoomList from './components/place-room-list'
import { getPlaceById } from '@/apis/fetchers/place/get-place-by-id/fetcher'
import { SwitchCase } from '@/components/react/switch-case'

interface PlaceDetailProps {
  params: {
    placeId: number
  }
  searchParams: {
    tab?: 'info' | 'photos' | 'reviews' | 'rooms'
  }
}

const defaultTabQuery = 'info'

export default async function PlaceDetail({ params: { placeId }, searchParams }: PlaceDetailProps) {
  const { name } = await getPlaceById({ placeId })
  const tabItems = [
    {
      query: 'info',
      label: '정보',
    },
    {
      query: 'rooms',
      label: '방 정보',
    },
    {
      query: 'photos',
      label: '사진',
    },
    {
      query: 'reviews',
      label: '리뷰',
    },
  ]

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title={name} />
      <TabNav items={tabItems} currTabItem={searchParams.tab || defaultTabQuery} />
      <SwitchCase
        value={searchParams.tab || 'info'}
        caseBy={{
          info: <PlaceInfo placeId={placeId} />,
          photos: <PlacePhotos placeId={placeId} />,
          reviews: <PlaceReviews placeId={placeId} />,
          rooms: <PlaceRoomList placeId={placeId} />,
        }}
        defaultComponent={<PlaceInfo placeId={placeId} />}
      />
    </div>
  )
}
