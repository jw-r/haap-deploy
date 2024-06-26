import { ReactNode } from 'react'
import { Input, InputProps } from './ui/input'

interface AdornmentInputProps extends InputProps {
  StartAdornment?: () => ReactNode
  EndAdornment?: () => ReactNode
}

export default function AdornmentInput({
  StartAdornment,
  EndAdornment,
  ...props
}: AdornmentInputProps) {
  return (
    <form className="relative flex h-[54px] w-full items-center justify-between rounded-full border-2 border-point bg-background-secondary px-[12px] text-[14px] placeholder:text-secondary">
      {StartAdornment && (
        <div>
          <StartAdornment />
        </div>
      )}
      <Input
        placeholder="지하철역, 이름 등을 통해 검색하세요"
        className="w-full border-none bg-transparent text-white placeholder:text-gray"
        {...props}
      />
      {EndAdornment && (
        <div>
          <EndAdornment />
        </div>
      )}
    </form>
  )
}
