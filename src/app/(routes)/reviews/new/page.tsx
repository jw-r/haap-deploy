import ReviewForm from './components/review-form'
import NewReviewHeader from './components/new-review-header'
import { Suspense } from 'react'
import { getPlaceById } from '@/apis/fetchers/place/get-place-by-id/fetcher'
import { postReview } from '@/apis/fetchers/review/post-review'

interface Props {
  searchParams: {
    placeId: number
    roomId: number
  }
}

export default async function NewReview({ searchParams: { placeId, roomId } }: Props) {
  const { name } = await getPlaceById({ placeId })

  async function handleSubmit(data: FormData) {
    'use server'

    await postReview({
      roomId,
      content: data.get('content') as string,
      ratings: [
        { category: 'PRICE', rating: Number(data.get('price')) },
        { category: 'INFRA', rating: Number(data.get('infra')) },
        { category: 'POSITION', rating: Number(data.get('position')) },
      ],
    })
  }

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <NewReviewHeader title={name} />
      <Suspense>
        <ReviewForm handleSubmit={handleSubmit} />
      </Suspense>
    </div>
  )
}
