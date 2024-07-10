import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex h-screen flex-col px-[37px] pb-[40px] pt-[80px]">
      <div className="flex flex-col items-center justify-center gap-3 text-point">
        <h1 className="text-[64px] font-semibold italic">HAAP!</h1>
        <p className="text-[14px] font-semibold">당신을 위한 음악 공간</p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
