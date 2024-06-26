import icons from '@/constants/icons'
import Image from 'next/image'
import Link from 'next/link'

const mockRatings = [
  { id: 'price', rate: 5, label: '가격' },
  { id: 'facilities', rate: 5, label: '시설' },
  { id: 'location', rate: 5, label: '위치' },
]

export default function Review() {
  const { placeId, roomId } = { placeId: 1, roomId: 1 } // todo: 나중에는  url query를 통해서 얻어오는 방식으로 교체
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-[12px]">
        <div className="flex gap-3">
          <span>리뷰</span>
          <span className="text-point">8개</span>
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
        <span className="text-point">3.2</span>
        <div className="flex gap-[2px] pb-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={index} src={icons.star} width={20} height={19} alt="" />
          ))}
        </div>
      </div>
      <div className="flex justify-between px-[16px]">
        {mockRatings.map(({ id, rate, label }) => (
          <div
            key={id}
            className="flex h-[23px] gap-[4px] rounded-[12px] bg-background-secondary px-[10px] py-[4px] text-[12px]"
          >
            <Image key={id} src={icons.star} width={12} height={11.4} alt="" />
            <div className="text-point">{rate.toFixed(1)}</div>
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
