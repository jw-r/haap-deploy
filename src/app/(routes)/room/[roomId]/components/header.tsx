'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter()

  return (
    <header className="relative">
      <Button variant="ghost" size="icon" onClick={() => router.back()}>
        <ChevronLeft />
      </Button>
      <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">{title}</span>
    </header>
  )
}

function ChevronLeft() {
  return (
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L2 11L12 21" stroke="white" strokeWidth="2" />
    </svg>
  )
}
