import icons from '@/constants/icons'
import Image from 'next/image'

const mockRatings = [
  { id: 'price', rate: 5, label: '가격' },
  { id: 'facilities', rate: 5, label: '시설' },
  { id: 'location', rate: 5, label: '위치' },
]

export default function Review() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 text-[12px]">
        <span>리뷰</span>
        <span className="text-point">8개</span>
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
