'use client'
import Image from 'next/image'
import { Suspense, useCallback, useRef, useState } from 'react'
import AdornmentInput from '@/components/adornment-input'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

import images from '@/constants/images'
import { SearchResult } from './components/search-result'
import { cn } from '@/lib/utils'
import { debounce } from 'lodash'

export default function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('')
  const searhInputRef = useRef<HTMLInputElement>(null)

  const ArrowLeftButton = useCallback(
    () =>
      isFocused && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsFocused(false)
            searhInputRef.current && (searhInputRef.current.value = '')
          }}
        >
          <ArrowLeft />
        </Button>
      ),
    [isFocused],
  )

  const debounceChange = debounce((value: string) => {
    setDebouncedSearchValue(value)
  }, 500)

  return (
    <>
      <BackgroundImage className={isFocused ? 'opacity-0' : ''} />
      <div className="absolute z-10 flex w-full flex-col items-center gap-[24px] px-[24px] pt-[77px]">
        {!isFocused && (
          <div className="mt-[80px] flex flex-col gap-[12px]">
            <div className="text-[36px] font-bold">합죽이합님,</div>
            <p className="text-[14px]">당신의 열정을 보여줄 수 있는 합주실을 찾아보세요</p>
          </div>
        )}
        <AdornmentInput
          ref={searhInputRef}
          onChange={(e) => debounceChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          StartAdornment={() => <ArrowLeftButton />}
        />
        {isFocused &&
          (debouncedSearchValue ? (
            <Suspense>
              <SearchResult searchValue={debouncedSearchValue} />
            </Suspense>
          ) : (
            <div>검색어가 없습니다</div>
          ))}
      </div>
    </>
  )
}

function BackgroundImage({ className }: { className: string }) {
  return (
    <div className={cn('absolute z-0 h-[240px] w-full', className)}>
      <Image src={images.haapMain} alt="" objectFit="cover" fill className="size-full" />
      <div className="absolute top-0 z-10 size-full bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
