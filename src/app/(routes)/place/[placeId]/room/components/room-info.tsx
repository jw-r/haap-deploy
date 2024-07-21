import { Heart } from 'lucide-react'
import Link from 'next/link'
import { mockImages, reviews, mockRatings } from '../[roomId]/mocks'
import Image from 'next/image'
import Review from '@/components/ui/review'
import ReviewCard from '@/components/ui/review-card'

export function RoomInfo() {
  // TODO: 추후 실제 값으로 대체 Review 수정으로 인한 가짜 데이터 추가

  const placeId = 1
  const roomId = 1

  return (
    <div className="divide-y divide-solid divide-background-secondary">
      <section className="flex flex-col gap-3 pb-[18px]">
        <span className="text-[12px]">정보</span>
        <div className="flex flex-col gap-3 text-[12px]">
          <div className="flex items-start gap-3">
            <Heart size={14} className="shrink-0" />
            <span>4인에서 6인정도 수용 가능한 공간 입니다. 악기는 드럼만 구비되어 있습니다.</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>100,000원 ~ 120,000원</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>4인 ~ 6인</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>경기 성남시 중원구 구체적인 주소 블라블라블라</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span>매일 10:00 ~ 23:00</span>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <Link href="" className="text-link">
              홈페이지 주소.com
            </Link>
          </div>
          <div className="flex gap-3">
            <Heart size={14} className="shrink-0" />
            <span className="text-link">010-0000-0000</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 pb-[36px] pt-[18px]">
        <span className="text-[12px]">리뷰 사진</span>
        <div className="grid h-[80px] grid-cols-4 gap-[13px]">
          {mockImages.slice(0, 4).map((url, index) => (
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
      </section>

      <section className="flex flex-col gap-3 pt-[18px]">
        <Review
          placeId={placeId}
          roomId={roomId}
          averageRatings={mockRatings}
          reviewCount={reviews.length}
        />

        {reviews.slice(2).map(({ id, author, editDate, images, ratings, content }) => (
          <ReviewCard
            key={id}
            author={author}
            editDate={editDate}
            images={images}
            ratings={ratings}
            content={content}
          />
        ))}
      </section>
    </div>
  )
}
