import Image from 'next/image'
import icons from '@/constants/icons'
import { SimplePlace } from '@/apis/types/dto/place.dto'

interface PlaceItemProps {
  place: SimplePlace
}

export function PlaceItem({ place }: PlaceItemProps) {
  const { name, tags, averageRating, simpleAddress, representationImage } = place
  return (
    <div className="relative flex w-full justify-between px-4 py-5">
      <div className="flex flex-col justify-between">
        <div className="pr-2 text-[16px] font-semibold">{name}</div>
        <div className="text-[10px]">{simpleAddress}</div>
        <div className="flex gap-[2px] pb-1">
          <span className="mr-1 text-[12px] text-point">{averageRating}</span>
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={index} src={icons.star} width={16} height={16} alt="" />
          ))}
        </div>
        <div className="flex gap-2 text-[12px]">
          {tags.map((tag) => (
            <div key={tag} className="">
              <span className="mr-1 text-point">#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="relative aspect-square w-[80px]">
        <Image
          src={representationImage}
          alt=""
          fill
          style={{ width: '100%', height: '100%' }}
          objectFit="cover"
        />
      </div>
    </div>
  )
}
