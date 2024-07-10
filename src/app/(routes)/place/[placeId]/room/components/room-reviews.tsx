import Review from '@/components/ui/review'
import { reviews } from '../[roomId]/mocks'
import ReviewCard from '@/components/ui/review-card'

export function RoomReviews() {
  // TODO: 추후 실제 값으로 대체 Review 수정으로 인한 가짜 데이터 추가

  const placeId = 1
  const roomId = 1
  return (
    <div className="flex flex-col gap-3">
      <Review placeId={placeId} roomId={roomId} />

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
