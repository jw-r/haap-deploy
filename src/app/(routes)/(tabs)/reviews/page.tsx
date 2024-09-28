'use client'

import Header from '@/components/ui/header'
import ReviewCard from '@/components/ui/review-card'
import { useQuery } from '@tanstack/react-query'
import { getMyReviews } from '@/apis/fetchers/review/get-my-reviews'
import { useSession } from 'next-auth/react'
import NoItem from '@/components/no-item'

export default function Reviews() {
  const { data: session } = useSession()
  const { data: reviews, isPending } = useQuery({
    queryKey: ['get-my-reviews'],
    queryFn: () =>
      getMyReviews({
        accessToken: session?.accessToken || '',
        queryParams: {
          startId: 0,
          count: 10,
        },
      }),
  })

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title="내가 쓴 리뷰" />
      <div className="flex h-[calc(100vh-160px)] flex-col gap-[18px] overflow-y-scroll">
        {reviews?.map(({ id, writer, content, photos, ratings, updatedAt }) => (
          <ReviewCard
            key={id}
            author={writer.id + ''}
            editDate={updatedAt}
            images={photos}
            ratings={ratings}
            content={content}
          />
        ))}
        {!isPending && reviews?.length === 0 && <NoItem />}
      </div>
    </div>
  )
}
