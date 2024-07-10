import { getRoomsByPlaceId } from '@/apis/fetchers/room/get-rooms-by-place-id/fetcher'
import Review from '@/components/ui/review'
import ReviewCard from '@/components/ui/review-card'
import { reviews } from '../room/[roomId]/mocks'

interface PlaceReviewProps {
  placeId: number
  maxLength?: number
}

export default async function PlaceReviews({ placeId, maxLength }: PlaceReviewProps) {
  const placeRoom = await getRoomsByPlaceId({ placeId })
  const visualizedReviews = reviews.slice(0, maxLength)
  return (
    <div className="flex flex-col gap-3">
      <Review placeId={placeId} roomId={placeRoom[0].id} />

      {visualizedReviews.map(({ id, author, editDate, images, ratings, content }) => (
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
