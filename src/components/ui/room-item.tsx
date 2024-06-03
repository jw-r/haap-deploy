import icons from '@/constants/icons'
import { Room } from '@/types'
import Image from 'next/image'

export default function RoomItem({ room }: { room: Room }) {
  const { name, rate, representationImage, description } = room
  return (
    <div className="relative flex w-full justify-between px-4 py-5">
      <div className="flex w-[240px] flex-col justify-between">
        <div className="inline-block align-baseline">
          <span className="pr-2 text-[16px] font-semibold">{name}</span>
        </div>
        <div className="flex gap-[2px] pb-1">
          <span className="mr-1 text-[12px] text-point">{rate.toFixed(1)}</span>
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={index} src={icons.star} width={16} height={16} alt="" />
          ))}
        </div>
        <div className="text-[12px]">{description}</div>
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
