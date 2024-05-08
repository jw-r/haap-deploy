import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mt-4 flex flex-col gap-4">
      <Button>로그인</Button>
      <Button variant="secondary">회원가입</Button>
      <Button variant="ghost" size="icon">
        🚀
      </Button>
    </div>
  )
}
