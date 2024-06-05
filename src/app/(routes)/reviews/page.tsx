import Header from '../../../components/ui/header'
import ReviewCard from '../../../components/ui/review-card'
import { reviews } from '../room/[roomId]/mocks'

export default function Reviews() {
  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title="내가 쓴 리뷰" />
      <div className="flex h-[calc(100vh-160px)] flex-col gap-[18px] overflow-y-scroll">
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
    </div>
  )
}
