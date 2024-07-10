'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TabNavProps {
  items: {
    query: string
    label: string
  }[]
  currTabItem: string
}

export default function TabNav({ items, currTabItem }: TabNavProps) {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between gap-[30px]">
      {items.map(({ query, label }) => (
        <Link
          key={query}
          href={`${pathname}?tab=${query}`}
          replace
          className={cn(
            'flex py-[10.5px] flex-1 justify-center border-b-2 border-background-secondary',
            currTabItem === query && 'border-point',
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
