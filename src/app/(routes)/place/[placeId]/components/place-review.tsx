import { getRoomsReviews } from '@/apis/fetchers/review/get-rooms-reviews/fetcher'
import { getRoomsByPlaceId } from '@/apis/fetchers/room/get-rooms-by-place-id/fetcher'
import { Rating } from '@/apis/types/dto/review.dto'
import Review from '@/components/ui/review'
import ReviewCard from '@/components/ui/review-card'

const DEFAULT_MAX_REVIEW_COUNT = 100

interface PlaceReviewProps {
  placeId: number
  maxLength?: number
}

export default async function PlaceReviews({ placeId, maxLength }: PlaceReviewProps) {
  const placeRoom = await getRoomsByPlaceId({ placeId })
  const roomIds = placeRoom ? placeRoom.map(({ id }) => id) : []
  const reviews = await getRoomsReviews({
    queryParams: {
      roomIds: roomIds,
      startId: roomIds[0],
      count: maxLength || DEFAULT_MAX_REVIEW_COUNT,
    },
  })
  const reviewCount = reviews.length
  const visualizedReviews = reviews.slice(0, maxLength)

  const noRatings: Rating[] = [
    { category: 'PRICE', rating: 0 },
    { category: 'POSITION', rating: 0 },
    { category: 'INFRA', rating: 0 },
  ]

  const averageRatings: Rating[] = reviews.reduce(
    (prev, { ratings: reviewRatings }) =>
      prev.map(({ category, rating }, idx) => ({
        category,
        rating: rating + reviewRatings[idx].rating / reviewCount,
      })),
    noRatings,
  )
  return (
    <div className="flex flex-col gap-3">
      <Review
        placeId={placeId}
        roomId={roomIds[0]}
        averageRatings={averageRatings}
        reviewCount={reviewCount}
      />
      {visualizedReviews.length ? (
        visualizedReviews.map(({ id, writer, content, photos, ratings, updatedAt, createdAt }) => (
          <ReviewCard
            key={id}
            author={writer.memberIdentity}
            editDate={updatedAt || createdAt}
            images={photos}
            ratings={ratings}
            content={content}
          />
        ))
      ) : (
        <div>리뷰가 없습니다</div>
      )}
    </div>
  )
}
