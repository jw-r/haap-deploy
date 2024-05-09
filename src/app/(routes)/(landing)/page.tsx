import { Button } from '@/components/ui/button'

export default function Landing() {
  return (
    <div className="flex h-screen flex-col px-[37px] py-[60px]">
      <div className="flex h-1/2 flex-col items-center justify-center gap-3 text-point">
        <h1 className="text-[64px] font-semibold italic">HAAP!</h1>
        <p className="text-[14px] font-semibold">당신을 위한 음악 공간</p>
      </div>

      <div className="flex flex-col gap-[31.5px]">
        <div className="flex flex-col gap-[20px]">
          <Button>로그인</Button>
          <Button variant="secondary">회원가입</Button>
        </div>
        <div className="relative h-[2px] bg-gray">
          <span className="absolute bottom-1/2 right-1/2 flex h-fit w-[44px] translate-x-1/2 translate-y-1/2 justify-center bg-background">
            OR
          </span>
        </div>
        <div className="flex justify-between">
          <div className="size-[54px] rounded-full bg-background-secondary" />
          <div className="size-[54px] rounded-full bg-background-secondary" />
          <div className="size-[54px] rounded-full bg-background-secondary" />
        </div>
      </div>
    </div>
  )
}
