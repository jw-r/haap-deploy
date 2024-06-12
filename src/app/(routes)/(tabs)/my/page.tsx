import Link from 'next/link'

const navButtons = [
  {
    category: '기록',
    items: [
      { name: '즐겨찾기', link: '/favorites' },
      { name: '내가 쓴 리뷰', link: '/reviews' },
    ],
  },
  {
    category: '내 정보',
    items: [
      { name: '회원정보 변경', link: '/' },
      { name: '개인정보처리방침', link: '/' },
      { name: '버전정보', link: '/' },
    ],
  },
  {
    category: '기타',
    items: [{ name: '로그아웃', link: '/' }],
  },
]

export default function MyPage() {
  return (
    <div className="mx-[32px] mt-[77px]">
      <div className="border-b-2 border-b-background-secondary pb-[16px]">
        <div className="text-[14px]">안녕하세요</div>
        <div className="text-[36px] font-semibold">합죽이합님,</div>
      </div>
      {navButtons.map(({ category, items }) => (
        <div
          key={category}
          className="flex flex-col gap-[16px] border-b-2 border-b-background-secondary py-[16px]"
        >
          <div className="text-[12px] text-gray">{category}</div>
          {items.map(({ name, link }) => (
            <Link key={name} href={link}>
              {name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
