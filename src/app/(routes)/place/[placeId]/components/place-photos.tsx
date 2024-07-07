import Image from 'next/image'
import { getPlacePhotos } from '@/apis/fetchers/place/get-place-photos/fetcher'

interface PlacePhotosProps {
  placeId: number
  maxLength?: number
}

export default async function PlacePhotos({ placeId, maxLength }: PlacePhotosProps) {
  const images = await getPlacePhotos({ placeId })
  const visualizedImages = images.slice(0, maxLength)

  return (
    <div className="grid grid-cols-4 gap-[13px]">
      {visualizedImages.map((url) => (
        <div key={url} className="relative aspect-square">
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
  )
}
