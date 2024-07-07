import { Heart } from 'lucide-react'
import Link from 'next/link'
import PlaceRoomList from './place-room-list'
import PlacePhotos from './place-photos'
import { getPlaceById } from '@/apis/fetchers/place/get-place-by-id/fetcher'
import PlaceReviews from './place-review'
import { type Date } from '@/apis/types/dto/place.dto'

interface PlacePhotosProps {
  placeId: number
}

export default async function PlaceInfo({ placeId }: PlacePhotosProps) {
  const placeInfo = await getPlaceById({
    placeId,
  })

  const dayIndex = new Date().getDay()
  const date = dayIndexToDate[dayIndex]
  const operatingTimeString = `${koreanDate[date]} : ${placeInfo.operatingTime[date] || '영업시간 없음'}`

  return (
    <div className="divide-y divide-solid divide-background-secondary">
      <section className="flex flex-col gap-3 pb-[18px]">
        <span className="text-[12px]">정보</span>
        <div className="flex flex-col gap-3 text-[12px]">
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>{placeInfo.address}</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>{operatingTimeString}</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <Link href="" className="text-link">
              {placeInfo.url}
            </Link>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span className="text-link">{placeInfo.phoneNumber}</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3 pb-[36px] pt-[18px]">
        <span className="text-[12px]">방 정보</span>
        <PlaceRoomList placeId={placeId} />
      </section>
      <section className="flex flex-col gap-3 pb-[36px] pt-[18px]">
        <span className="text-[12px]">리뷰 사진</span>
        <PlacePhotos placeId={placeId} maxLength={4} />
      </section>
      <PlaceReviews placeId={placeId} maxLength={3} />
    </div>
  )
}

const dayIndexToDate: Record<number, Date> = {
  0: 'sun',
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
}

const koreanDate: Record<Date, string> = {
  mon: '월',
  tue: '화',
  wed: '수',
  thu: '목',
  fri: '금',
  sat: '토',
  sun: '일',
}
