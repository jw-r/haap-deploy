import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export type FormType = {
  [key: string]: {
    label: string
    required: boolean
  }
}

interface FormProps {
  inputForm: FormType
  handleSubmit?: (data: FormData) => void
  buttonText: string
}

export default function Form({ inputForm, buttonText, handleSubmit }: FormProps) {
  return (
    <form action={handleSubmit} className="flex flex-col gap-[12px]">
      {Object.keys(inputForm).map((key) => {
        const { label, required } = inputForm[key]
        return (
          <div key={key}>
            <label htmlFor={key} className="inline-block pb-[8px] text-[12px]">
              {label}
            </label>
            <Input
              name={key}
              required={required}
              id={key}
              placeholder={`${label}를 입력해주세요.`}
              className="peer h-[54px] rounded-full border-2 bg-background-secondary px-[20px] pr-[60px] text-[14px] placeholder:text-secondary focus:border-point"
            />
          </div>
        )
      })}
      <Button type="submit" className="mt-[16px]">
        {buttonText}
      </Button>
    </form>
  )
}
