import Link from 'next/link'
import Form from '../components/form'

export default function SignUp() {
  // async function handleSubmit(data: FormData) {
  //  "use server"
  //  console.log(data.get('identity'));
  // }
  const signUpInputForm = {
    nickname: {
      label: '닉네임',
      required: true,
    },
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
      <Form inputForm={signUpInputForm} buttonText="회원가입" />
      <div className="text-center">
        <span>이미 계정이 있으신가요?</span>
        <Link href={'./sign-in'} className="ml-[4px] text-point underline">
          로그인
        </Link>
      </div>
    </>
  )
}
