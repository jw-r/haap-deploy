import Header from '@/components/ui/header'
import TabNav from '@/components/ui/tab-nav'
import { SwitchCase } from '@/components/react/switch-case'
import { RoomInfo } from '../components/room-info'
import { RoomPhotos } from '../components/room-photos'
import { RoomReviews } from '../components/room-reviews'

export type Tab = 'info' | 'photos' | 'reviews'

interface Props {
  searchParams: {
    tab: Tab
  }
}

const defaultTabQuery = 'info'

export default function RoomDetail({ searchParams = { tab: 'info' } }: Props) {
  const tabItems = [
    {
      query: 'info',
      label: '정보',
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

  const currTabItem = tabItems.map((item) => item.query).includes(searchParams.tab)
    ? searchParams.tab
    : defaultTabQuery

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title="판교의 집 - A룸" />
      <TabNav items={tabItems} currTabItem={currTabItem} />
      <SwitchCase
        value={currTabItem}
        caseBy={{
          info: <RoomInfo />,
          photos: <RoomPhotos />,
          reviews: <RoomReviews />,
        }}
        defaultComponent={<RoomInfo />}
      />
    </div>
  )
}
