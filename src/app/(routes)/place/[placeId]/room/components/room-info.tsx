'use client'

import { CameraIcon, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Review from '@/components/ui/review'
import ReviewCard from '@/components/ui/review-card'
import { dayIndexToDate, koreanDate } from '@/constants/date'
import { PlaceInfo } from '@/apis/types/dto/place.dto'
import { RoomInfo as RoomInfoDTO } from '@/apis/types/dto/room.dto'
import { usePathname } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getRoomsReviews } from '@/apis/fetchers/review/get-rooms-reviews/fetcher'
import { Rating } from '@/apis/types/dto/review.dto'

interface Props {
  placeInfo: PlaceInfo
  roomInfo: RoomInfoDTO
  placePhotos: string[]
}

export function RoomInfo({ placeInfo, roomInfo, placePhotos }: Props) {
  const dayIndex = new Date().getDay()
  const date = dayIndexToDate[dayIndex]
  const operatingTimeString = `${koreanDate[date]} : ${placeInfo.operatingTime[date] || '영업시간 없음'}`
  const pathname = usePathname()
  const { data } = useQuery({
    queryKey: ['room reviews', roomInfo.id],
    queryFn: () =>
      getRoomsReviews({
        queryParams: {
          startId: 0,
          count: 10,
          roomIds: [roomInfo.id],
        },
      }),
  })

  const reviewCount = data?.length || 0

  const noRatings: Rating[] = [
    { category: 'PRICE', rating: 0 },
    { category: 'POSITION', rating: 0 },
    { category: 'INFRA', rating: 0 },
  ]

  return (
    <div className="divide-y divide-solid divide-background-secondary">
      <section className="flex flex-col gap-3 pb-[18px]">
        <span className="text-[12px]">정보</span>
        <div className="flex flex-col gap-3 text-[12px]">
          <div className="flex items-start gap-3">
            <Heart size={14} className="shrink-0" />
            <span>{roomInfo.description}</span>
          </div>
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
        </div>
      </section>

      <section className="flex flex-col gap-3 pb-[36px] pt-[18px]">
        <span className="text-[12px]">리뷰 사진</span>
        <div className="grid h-[80px] grid-cols-4 gap-[13px]">
          {placePhotos.slice(0, 3).map((url, index) => {
            const isLast = index === placePhotos.length - 1

            if (isLast) {
              return (
                <Link
                  key={index}
                  href={`${pathname}?tab=photos`}
                  className="relative aspect-square"
                >
                  <Image
                    src={roomInfo.representativePhoto}
                    alt=""
                    fill
                    className="size-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50">
                    <div className="center flex items-end gap-[4px] text-[14px] font-medium">
                      <CameraIcon width={18} className="inline" />
                      <span>{placePhotos.length + (roomInfo.representativePhoto ? 1 : 0)}</span>
                    </div>
                  </div>
                </Link>
              )
            }

            return (
              <div key={index} className="relative aspect-square">
                <Image src={url} alt="" fill className="size-full" objectFit="cover" />
              </div>
            )
          })}
        </div>
      </section>

      <section className="flex flex-col gap-3 pt-[18px]">
        <Review
          placeId={1}
          roomId={roomInfo.id}
          averageRatings={
            reviewCount !== 0 ? data?.flatMap((review) => review.ratings) || [] : noRatings
          }
          reviewCount={reviewCount}
        />

        {data
          ?.slice(2)
          .map(({ id, writer, content, photos, ratings, updatedAt }) => (
            <ReviewCard
              key={id}
              author={writer.memberIdentity}
              editDate={updatedAt}
              images={photos}
              ratings={ratings}
              content={content}
            />
          ))}
      </section>
    </div>
  )
}
