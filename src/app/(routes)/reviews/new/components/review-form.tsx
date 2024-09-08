'use client'

import RatingQuestion from './rating-question'
import Image from 'next/image'
import icons from '@/constants/icons'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useGetRoomsByPlaceId } from '@/apis/fetchers/room/get-rooms-by-place-id/query'

const ratingContents = [
  { question: '가격은 합리적이었나요?', category: 'price' },
  { question: '시설은 만족스러우셨나요?', category: 'infra' },
  { question: '접근성은 좋으셨나요?', category: 'position' },
]

interface ReviewFormProps {
  handleSubmit?: (data: FormData) => void
}

export default function ReviewForm({ handleSubmit }: ReviewFormProps) {
  const [images, setImages] = useState<string[]>([])
  const searchParams = useSearchParams()

  const roomId = searchParams.get('roomId') || undefined
  const placeId = searchParams.get('placeId') || undefined

  const { data: roomList } = useGetRoomsByPlaceId({ placeId: Number(placeId) })

  function onFileUpload(files: FileList | null) {
    if (!files) return
    const urls = Array.from(files).map((file) => URL.createObjectURL(file))
    setImages([...images, ...urls])
  }

  function onRoomIdChange(id: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('roomId', id)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <form className="flex flex-col gap-[16px]" action={handleSubmit}>
      <select
        value={roomId}
        className="w-full rounded bg-background-secondary p-2"
        name="roomId"
        onChange={(e) => onRoomIdChange(e.target.value)}
      >
        {roomList?.map(({ name, id }) => <option label={name} key={id} value={id} />)}
      </select>
      {ratingContents.map(({ question, category }) => (
        <div className="flex flex-col gap-[8px]" key={category}>
          <RatingQuestion question={question} category={category} />
        </div>
      ))}
      <div className="grid grid-cols-4 gap-[13px]">
        <div className="aspect-square">
          <label
            htmlFor="image-upload"
            className="flex size-full items-center justify-center bg-gray"
          >
            <Image src={icons.camera} width={20} alt="" />
            <input
              multiple
              id="image-upload"
              type="file"
              className="hidden"
              onChange={(e) => {
                onFileUpload(e.target.files)
              }}
              accept="image/*"
            />
          </label>
        </div>
        {images.map((src) => (
          <div className="relative aspect-square" key={src}>
            <Image src={src} alt="업로드 이미지" fill className="size-full object-cover" />
          </div>
        ))}
        <input value={images} name="images" className="hidden" readOnly />
      </div>
      <textarea
        rows={4}
        name="content"
        className="block w-full bg-background-secondary p-[8px]"
        placeholder="후기를 남겨주세요"
      />
      <button type="submit">제출</button>
    </form>
  )
}
