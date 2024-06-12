import SearchInput from '@/components/search-input'
import images from '@/constants/images'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="relative h-[343px] w-full">
        <Image src={images.haapMain} alt="" fill />

        <div className="absolute h-[343px] w-full bg-gradient-to-b from-transparent to-background" />

        <div className="container absolute bottom-0 z-10 flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-[36px] font-bold">합죽이합님,</div>
            <p className="text-[14px]">당신의 열정을 보여줄 수 있는 합주실을 찾아보세요</p>
          </div>
          <SearchInput />
        </div>
      </div>
    </div>
  )
}
