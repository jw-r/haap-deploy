import { Category, Rating } from '@/apis/types/dto/review.dto'
import icons from '@/constants/icons'
import Image from 'next/image'
import Link from 'next/link'

interface ReviewProps {
  placeId: number
  roomId: number
  reviewCount: number
  averageRatings: Rating[]
}

const categoryToKoLabel: Record<Category, string> = {
  PRICE: '가격',
  POSITION: '시설',
  INFRA: '위치',
}

// 필요한 데이터:
export default function Review({ placeId, roomId, reviewCount, averageRatings }: ReviewProps) {
  const totalAverageRating = averageRatings.reduce(
    (prev, { rating }) => prev + rating / averageRatings.length,
    0,
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-[12px]">
        <div className="flex gap-3">
          <span>리뷰</span>
          <span className="text-point">{reviewCount}</span>
        </div>
        <Link
          href={{
            pathname: '/reviews/new',
            query: {
              placeId,
              roomId,
            },
          }}
          // todo: roomId만 전달하고 review-form 내부에서 처리하는 방법으로 하는 것이 더 적합할 수도 있을 것 같습니다.
          className="flex items-center gap-1 px-2 py-1 text-link"
        >
          <Image src={icons.edit} width={20} height={19} alt="" />
          <span>리뷰 쓰기</span>
        </Link>
      </div>
      <div className="flex items-center gap-[7px] px-[16px]">
        <span className="text-point">{totalAverageRating.toFixed(1)}</span>
        <div className="flex gap-[2px] pb-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={index} src={icons.star} width={20} height={19} alt="" />
          ))}
        </div>
      </div>
      <div className="flex justify-between px-[16px]">
        {averageRatings.map(({ category, rating }) => (
          <div
            key={category}
            className="flex h-[23px] gap-[4px] rounded-[12px] bg-background-secondary px-[10px] py-[4px] text-[12px]"
          >
            <Image key={category} src={icons.star} width={12} height={11.4} alt="" />
            <div className="text-point">{rating.toFixed(1)}</div>
            <div>{categoryToKoLabel[category]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
