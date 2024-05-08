import { Button } from './ui/button'
import { Input } from './ui/input'

export default function SearchInput({ ...props }) {
  return (
    <form className="relative">
      <Input
        placeholder="지하철역, 이름 등을 통해 검색하세요"
        className="h-[54px] rounded-full border-2 border-point bg-background-secondary px-[20px] pr-[60px] text-[14px] placeholder:text-secondary"
        {...props}
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-1/2 right-[18px] translate-y-1/2"
      >
        {/**
         * TODO: Icon constants 처리 후 Image 태그 적용
         */}
        <SearchIcon />
      </Button>
    </form>
  )
}

function SearchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 19L25 25"
        stroke="#09B5C1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 11.2857C1 16.9663 5.60507 21.5714 11.2857 21.5714C14.1309 21.5714 16.7065 20.4162 18.5685 18.5491C20.4242 16.6886 21.5714 14.1211 21.5714 11.2857C21.5714 5.60507 16.9663 1 11.2857 1C5.60507 1 1 5.60507 1 11.2857Z"
        stroke="#09B5C1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
