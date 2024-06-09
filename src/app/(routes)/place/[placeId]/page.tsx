import Image from 'next/image'
import Header from '@/components/ui/header'
import TabNav from '@/components/ui/tab-nav'
import ReviewCard from '@/components/ui/review-card'
import Review from '@/components/ui/review'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { mockImages, reviews } from '../../room/[roomId]/mocks'
import { PlaceRooms } from './mocks'
import RoomItem from '@/components/ui/room-item'

interface PlaceDetailProps {
  params: {
    roomId: string
  }
  searchParams: {
    tab?: 'info' | 'photos' | 'reviews' | 'rooms'
  }
}

const defaultTabQuery = 'info'

export default function PlaceDetail({ /* params, */ searchParams }: PlaceDetailProps) {
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

  const Content = () => {
    switch (searchParams.tab) {
      case 'info':
        return <PlaceInfo />
      case 'photos':
        return <PlacePhotos />
      case 'reviews':
        return <PlaceReviews />
      case 'rooms':
        return <PlaceRoomList />
      default:
        return <PlaceInfo />
    }
  }

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title="판교의 집" />
      <TabNav items={tabItems} currQuery={searchParams.tab || defaultTabQuery} />
      <Content />
    </div>
  )
}

function PlaceInfo() {
  return (
    <div className="divide-y divide-solid divide-background-secondary">
      <section className="flex flex-col gap-3 pb-[18px]">
        <span className="text-[12px]">정보</span>
        <div className="flex flex-col gap-3 text-[12px]">
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>경기 성남시 중원구 구체적인 주소 블라블라블라</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>매일 10:00 ~ 23:00</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <Link href="" className="text-link">
              홈페이지 주소.com
            </Link>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span className="text-link">010-0000-0000</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3 pb-[36px] pt-[18px]">
        <span className="text-[12px]">방 정보</span>
        <PlaceRoomList />
      </section>
      <section className="flex flex-col gap-3 pb-[36px] pt-[18px]">
        <span className="text-[12px]">리뷰 사진</span>
        <div className="grid h-[80px] grid-cols-4 gap-[13px]">
          {mockImages.slice(0, 4).map((url, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={url}
                alt=""
                fill
                style={{ width: '100%', height: '100%' }}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 pt-[18px]">
        <Review />

        {reviews.slice(2).map(({ id, author, editDate, images, ratings, content }) => (
          <ReviewCard
            key={id}
            author={author}
            editDate={editDate}
            images={images}
            ratings={ratings}
            content={content}
          />
        ))}
      </section>
    </div>
  )
}

function PlacePhotos() {
  return (
    <div className="grid grid-cols-4 gap-[13px]">
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            src={mockImages[0]}
            alt=""
            fill
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  )
}

function PlaceReviews() {
  return (
    <div className="flex flex-col gap-3">
      <Review />

      {reviews.map(({ id, author, editDate, images, ratings, content }) => (
        <ReviewCard
          key={id}
          author={author}
          editDate={editDate}
          images={images}
          ratings={ratings}
          content={content}
        />
      ))}
    </div>
  )
}

function PlaceRoomList() {
  return PlaceRooms.map((room) => (
    <Link
      href={`/room/${room.id}`}
      className="flex flex-col gap-[8px] rounded-[12px] bg-background-secondary"
      key={room.id}
    >
      <RoomItem room={room} />
    </Link>
  ))
}
