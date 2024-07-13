import React, { ReactNode } from 'react'
import { Input, InputProps } from './ui/input'

interface AdornmentInputProps extends InputProps {
  StartAdornment?: () => ReactNode
  EndAdornment?: () => ReactNode
}

const AdornmentInput = React.forwardRef<HTMLInputElement, AdornmentInputProps>(
  ({ StartAdornment, EndAdornment, ...props }, ref) => {
    return (
      <div className="relative flex h-[54px] w-full items-center justify-between rounded-full border-2 border-point bg-background-secondary px-[12px] text-[14px] placeholder:text-secondary">
        {StartAdornment && (
          <div>
            <StartAdornment />
          </div>
        )}
        <Input
          placeholder="지하철역, 이름 등을 통해 검색하세요"
          className="w-full border-none bg-transparent text-white placeholder:text-gray"
          ref={ref}
          {...props}
        />
        {EndAdornment && (
          <div>
            <EndAdornment />
          </div>
        )}
      </div>
    )
  },
)

AdornmentInput.displayName = 'AdornmentInput'

export default AdornmentInput
