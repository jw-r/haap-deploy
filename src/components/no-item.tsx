import Link from 'next/link'

const NoItem = () => {
  return (
    <div className="center flex flex-col items-center justify-center">
      <div className="text-[32px] font-bold">텅!</div>
      <Link
        href="/home"
        replace
        className="mt-[8px] rounded-[4px] bg-[#000000]/80 px-[12px] py-[5px]"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NoItem
