import Link from 'next/link'
import Form from '../components/form'

export default function SignIn() {
  // async function handleSubmit(data: FormData) {
  //  "use server"
  //  console.log(data.get('identity'));
  // }

  const signInInputForm = {
    identity: {
      label: '아이디',
      required: true,
    },
    password: {
      label: '비밀번호',
      required: true,
    },
  }

  return (
    <>
      <Form inputForm={signInInputForm} buttonText="로그인" />
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
      <div className="text-center">
        <span>계정이 없으신가요?</span>
        <Link href={'./sign-up'} className="ml-[4px] text-point underline">
          회원가입
        </Link>
      </div>
    </>
  )
}
