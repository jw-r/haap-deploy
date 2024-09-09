import Image from 'next/image'

interface Props {
  placePhotos: string[]
}

export function RoomPhotos({ placePhotos }: Props) {
  return (
    <div className="grid grid-cols-4 gap-[13px]">
      {placePhotos.map((photo, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            src={photo}
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
