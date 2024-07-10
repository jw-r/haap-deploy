import { signOut } from '@/app/api/auth/[...nextauth]/auth'
import Link from 'next/link'
import { Fragment } from 'react'

type SectionItem = {
  title: string
  items: Array<
    | { name: string; type: 'link'; href: string }
    | { name: string; type: 'action'; action: () => Promise<void> }
  >
}

const sectionItems: SectionItem[] = [
  {
    title: '기록',
    items: [
      { name: '즐겨찾기', type: 'link', href: '/favorites' },
      { name: '내가 쓴 리뷰', type: 'link', href: '/reviews' },
    ],
  },
  {
    title: '내 정보',
    items: [
      { name: '회원정보 변경', type: 'link', href: '/' },
      { name: '개인정보처리방침', type: 'link', href: '/' },
      { name: '버전정보', type: 'link', href: '/' },
    ],
  },
  {
    title: '기타',
    items: [
      {
        name: '로그아웃',
        type: 'action',
        action: async () => {
          'use server'

          await signOut()
        },
      },
    ],
  },
]

export default function MyPage() {
  return (
    <div className="mx-[32px] mt-[77px]">
      <div className="border-b-2 border-b-background-secondary pb-[16px]">
        <div className="text-[14px]">안녕하세요</div>
        <div className="text-[36px] font-semibold">합죽이합님,</div>
      </div>
      {sectionItems.map(({ title, items }) => (
        <div
          key={title}
          className="flex flex-col gap-[16px] border-b-2 border-b-background-secondary py-[16px]"
        >
          <div className="text-[12px] text-gray">{title}</div>
          {items.map((item) => (
            <Fragment key={item.name}>
              {item.type === 'link' ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <form action={item.action}>
                  <button>{item.name}</button>
                </form>
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}
