import icons from '@/constants/icons'
import Image from 'next/image'

interface CardProps {
  author: string
  editDate: string
  ratings: { id: string; rate: number; label: string }[]
  content: string
  images?: string[]
}

export default function ReviewCard({ author, editDate, ratings, content, images }: CardProps) {
  return (
    <div className="flex flex-col gap-[8px] rounded-[12px] bg-background-secondary p-[16px]">
      <div className="flex justify-between">
        <span className="text-[12px] font-semibold">{author}</span>
        <span className="text-[10px] text-gray">수정 일자: {editDate}</span>
      </div>

      <div className="flex flex-col gap-[8px] text-[12px]">
        {images?.length && (
          <div className="flex h-[80px] gap-3 overflow-y-scroll">
            {images.map((url, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={url}
                  alt=""
                  fill
                  style={{ width: '100%', height: '100%' }}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        )}
        <div>{content}</div>
      </div>

      <div className="flex justify-between">
        {ratings.map(({ id, rate, label }) => (
          <div
            key={id}
            className="flex h-[23px] gap-[4px] bg-background-secondary py-[4px] text-[12px]"
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
