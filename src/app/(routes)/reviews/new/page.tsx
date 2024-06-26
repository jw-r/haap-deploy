import ReviewForm from './components/review-form'
import NewReviewHeader from './components/new-review-header'
import { Suspense } from 'react'

export default function NewReview() {
  const placeName = '판교의 집' // todo: 나중에 url query의 placeId를 통해 이름 얻어오기

  // async function handleSubmit(data: FormData) {
  //   'use server'
  //   console.log(data.get('images'))
  // }

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <NewReviewHeader title={placeName} />
      <Suspense>
        <ReviewForm />
      </Suspense>
    </div>
  )
}
