'use client'
import Image from 'next/image'
import { ChangeEvent, useCallback, useState } from 'react'
import AdornmentInput from '@/components/adornment-input'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

import images from '@/constants/images'
import { SearchResult } from './components/search-result'

export default function Home() {
  const [isFocused, setIsFocused] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const ArrowLeftButton = useCallback(
    () =>
      isFocused && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsFocused(false)
            setSearchValue('')
          }}
        >
          <ArrowLeft />
        </Button>
      ),
    [isFocused],
  )

  return (
    <>
      {!isFocused && <BackgroundImage />}
      <div className="absolute z-10 flex w-full flex-col items-center gap-[24px] px-[24px] pt-[77px]">
        {!isFocused && (
          <div className="mt-[80px] flex flex-col gap-[12px]">
            <div className="text-[36px] font-bold">합죽이합님,</div>
            <p className="text-[14px]">당신의 열정을 보여줄 수 있는 합주실을 찾아보세요</p>
          </div>
        )}
        <AdornmentInput
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
          }}
          onFocus={() => setIsFocused(true)}
          StartAdornment={() => <ArrowLeftButton />}
        />
        {isFocused && <SearchResult searchValue={searchValue} />}
      </div>
    </>
  )
}

function BackgroundImage() {
  return (
    <div className="absolute z-0 h-[240px] w-full">
      <Image src={images.haapMain} alt="" objectFit="cover" fill className="size-full" />
      <div className="absolute top-0 z-10 size-full bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
