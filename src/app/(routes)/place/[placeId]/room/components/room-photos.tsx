import Image from 'next/image'
import { mockImages } from '../[roomId]/mocks'

export function RoomPhotos() {
  return (
    <div className="grid grid-cols-4 gap-[13px]">
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            src={mockImages[0]}
            alt=""
            fill
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  )
}
