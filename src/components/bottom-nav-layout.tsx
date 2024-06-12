'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import { PropsWithChildren, ReactNode, useMemo } from 'react'

type IconProps = {
  className: HTMLElement['className']
}

type NavItem = {
  href: string
  Icon: (props: IconProps) => ReactNode
  title: string
  segments: string[][]
}

export const BottomNavLayout = (props: PropsWithChildren) => {
  const segments = useSelectedLayoutSegments()
  const navItems: NavItem[] = useMemo(
    () => [
      {
        href: '/favorites',
        Icon: FavoriteIcon,
        title: '즐겨찾기',
        segments: [['favorites']],
      },
      {
        href: '/home',
        Icon: HomeIcon,
        title: '홈',
        segments: [['home'], ['search']],
      },
      {
        href: '/my',
        Icon: ProfileIcon,
        title: '마이페이지',
        segments: [['my'], ['reviews']],
      },
    ],
    [],
  )

  const activeItem = useMemo(() => findActiveNav(navItems, segments), [navItems, segments])

  return (
    <div className={cn(activeItem && 'pb-[66px]')}>
      {props.children}
      {activeItem && (
        <div className="fixed bottom-0 left-0  w-full">
          <div className="screen m-auto flex justify-around border-t border-neutral-800 bg-background py-[8px]">
            {navItems.map((item) => {
              const { href, Icon, title } = item
              const isActive = activeItem === item
              return (
                <Link
                  key={title}
                  href={href}
                  className="relative flex flex-1 flex-col items-center gap-[5px]"
                >
                  <Icon className={cn(isActive ? 'text-point' : 'text-secondary')} />
                  <span className={cn('text-sm', isActive ? 'text-point' : 'text-secondary')}>
                    {title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

type SegmentsRecord = {
  segments: string[]
  item: NavItem
}

const descendingOrderOfSegments = (recordA: SegmentsRecord, recordB: SegmentsRecord): number =>
  recordB.segments.length - recordA.segments.length

const getIsActiveNav = (currentSegments: string[]) => (record: SegmentsRecord) =>
  record.segments.every((seg, index) => currentSegments[index] === seg)

const findActiveNav = (items: NavItem[], currentSegments: string[]): NavItem | undefined => {
  const segments = items.reduce<SegmentsRecord[]>((result, item) => {
    item.segments.forEach((segments) => {
      result.push({
        segments,
        item,
      })
    })
    return result
  }, [])

  const isActiveSegment = getIsActiveNav(currentSegments)
  return segments.sort(descendingOrderOfSegments).find(isActiveSegment)?.item
}

const HomeIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.16667 11.6667L14.5 3.5L23.8333 11.6667L23.8333 23.3333H18V18.6667C18 17.7384 17.6313 16.8482 16.9749 16.1918C16.3185 15.5354 15.4283 15.1667 14.5 15.1667C13.5718 15.1667 12.6815 15.5354 12.0251 16.1918C11.3688 16.8482 11 17.7384 11 18.6667V23.3333H5.16668L5.16667 11.6667Z" />
      <path
        d="M5.16666 11.6667L14.5 3.5L23.8333 11.6667L23.8333 23.3333H18V18.6667C18 17.7384 17.6312 16.8482 16.9749 16.1918C16.3185 15.5354 15.4283 15.1667 14.5 15.1667C13.5717 15.1667 12.6815 15.5354 12.0251 16.1918C11.3687 16.8482 11 17.7384 11 18.6667V23.3333H5.16666L5.16666 11.6667Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const FavoriteIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.82401 9.24544L12.0026 2.63633C12.4105 1.78789 13.5894 1.78789 13.9974 2.63633L17.1759 9.24544L24.2842 10.3118C25.1962 10.4486 25.5597 11.5992 24.8995 12.2592L19.7568 17.4002L20.9705 24.6628C21.1264 25.5956 20.1725 26.3067 19.3564 25.8663L13 22.4354L6.64353 25.8663C5.82749 26.3067 4.87361 25.5956 5.02946 24.6628L6.24311 17.4002L1.10057 12.2592C0.440299 11.5992 0.803795 10.4486 1.71581 10.3118L8.82401 9.24544Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ProfileIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21.8264C21 19.9366 19.633 17.4999 17.5 17.5H10.5C8.367 17.4999 7 19.9366 7 21.8264M3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14ZM17.5 10.5C17.5 12.433 15.933 14 14 14C12.067 14 10.5 12.433 10.5 10.5C10.5 8.567 12.067 7 14 7C15.933 7 17.5 8.567 17.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
