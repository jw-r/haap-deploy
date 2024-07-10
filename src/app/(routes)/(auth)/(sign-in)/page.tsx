'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function SignIn() {
  return (
    <div className="relative h-full">
      <div className="center flex w-full flex-col gap-[16px]">
        <Button
          className="w-full bg-[#FBE44D] text-[#3C1E1E] hover:bg-[#FBE44D]/80"
          onClick={() => signIn('kakao')}
        >
          <Image src="/icons/kakao.svg" alt="" width={20} height={20} className="mr-[12px]" />
          카카오로 로그인
        </Button>
        <Button
          className="w-full bg-[#EDEDED] text-[#151515] hover:bg-[#EDEDED]/80"
          onClick={() => signIn('google')}
        >
          <Image src="/icons/google.svg" alt="" width={20} height={20} className="mr-[12px]" />
          Google로 로그인
        </Button>
      </div>
    </div>
  )
}
