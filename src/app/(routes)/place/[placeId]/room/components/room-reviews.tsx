'use client'

import Review from '@/components/ui/review'
import ReviewCard from '@/components/ui/review-card'
import { useQuery } from '@tanstack/react-query'
import { getRoomsReviews } from '@/apis/fetchers/review/get-rooms-reviews/fetcher'
import { Rating } from '@/apis/types/dto/review.dto'

interface Props {
  placeId: number
  roomId: number
}

export function RoomReviews({ placeId, roomId }: Props) {
  const { data } = useQuery({
    queryKey: ['room reviews', roomId],
    queryFn: () =>
      getRoomsReviews({
        queryParams: {
          startId: 0,
          count: 30,
          roomIds: [roomId],
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
    <div className="flex flex-col gap-3">
      <Review
        placeId={placeId}
        roomId={roomId}
        averageRatings={
          reviewCount !== 0 ? data?.flatMap((review) => review.ratings) || [] : noRatings
        }
        reviewCount={reviewCount}
      />

      {data?.map(({ id, writer, content, photos, ratings, updatedAt }) => (
        <ReviewCard
          key={id}
          author={writer.memberIdentity}
          editDate={updatedAt}
          images={photos}
          ratings={ratings}
          content={content}
        />
      ))}
    </div>
  )
}
