'use client'

import { useRouter } from 'next/navigation'

interface NewReviewHeaderProps {
  title: string | null
}

export default function NewReviewHeader({ title }: NewReviewHeaderProps) {
  const router = useRouter()

  return (
    <header className="relative flex justify-between">
      <button onClick={() => router.back()}>취소</button>
      <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">{title}</span>
      <button onClick={() => router.back()} className="text-point">
        확인
      </button>
    </header>
  )
}
