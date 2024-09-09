import Header from '@/components/ui/header'
import TabNav from '@/components/ui/tab-nav'
import { SwitchCase } from '@/components/react/switch-case'
import { RoomInfo } from '../components/room-info'
import { RoomPhotos } from '../components/room-photos'
import { RoomReviews } from '../components/room-reviews'
import { getRoomById } from '@/apis/fetchers/room/get-room-by-id/fetcher'
import { getPlaceById } from '@/apis/fetchers/place/get-place-by-id/fetcher'
import { tabItems } from './constants/tab'
import { getPlacePhotos } from '@/apis/fetchers/place/get-place-photos/fetcher'

export type Tab = (typeof tabItems)[number]['query']

interface Props {
  params: {
    placeId: string
    roomId: string
  }
  searchParams: {
    tab: Tab
  }
}

const defaultTabQuery = 'info'

export default async function RoomDetail({ params, searchParams = { tab: 'info' } }: Props) {
  const [placeInfo, placePhotos, roomInfo] = await Promise.all([
    getPlaceById({
      placeId: Number(params.placeId),
    }),
    getPlacePhotos({
      placeId: Number(params.placeId),
    }),
    getRoomById({
      roomId: Number(params.roomId),
    }),
  ])

  const currTabItem = tabItems.map((item) => item.query).includes(searchParams.tab)
    ? searchParams.tab
    : defaultTabQuery

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title={`${placeInfo.name} - ${roomInfo.name}`} />
      <TabNav items={tabItems} currTabItem={currTabItem} />
      <SwitchCase
        value={currTabItem}
        caseBy={{
          info: <RoomInfo placeInfo={placeInfo} roomInfo={roomInfo} placePhotos={placePhotos} />,
          photos: <RoomPhotos placePhotos={placePhotos} />,
          reviews: <RoomReviews placeId={Number(params.placeId)} roomId={roomInfo.id} />,
        }}
        defaultComponent={
          <RoomInfo placeInfo={placeInfo} roomInfo={roomInfo} placePhotos={placePhotos} />
        }
      />
    </div>
  )
}
