import { useSession } from 'next-auth/react'

export const useUser = () => {
  const { data, status } = useSession()
  return { user: data?.user, status }
}
