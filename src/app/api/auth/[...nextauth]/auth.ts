import NextAuth, { NextAuthResult, Session } from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import Google from 'next-auth/providers/google'
import Naver from 'next-auth/providers/naver'
import { loginOauth } from '@/apis/fetchers/auth/login-oauth'
import { getUserInfo } from '@/apis/fetchers/user/get-user-info'
import { UserDTO } from '@/apis/types/dto/user.dto'

interface CustomSession extends Session {
  accessToken: string
  user: UserDTO
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [Kakao, Google, Naver],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account?.access_token) {
        try {
          const { accessToken } = await loginOauth({
            accessToken: account.access_token,
            oauthProvider: account.provider.toUpperCase() as 'KAKAO' | 'GOOGLE',
          })
          token.accessToken = accessToken
        } catch (error) {
          console.error(error)
          throw new Error('Failed to LogIn')
        }

        try {
          const user = await getUserInfo({
            accessToken: token.accessToken as string,
          })
          token.user = user
        } catch (error) {
          console.error(error)
          throw new Error('Failed to get user')
        }
      }

      return token
    },

    session: ({ session, token }) => {
      const customSession = session as unknown as CustomSession
      customSession.accessToken = token.accessToken as string
      customSession.user = token.user as UserDTO

      return customSession
    },
  },
}) satisfies NextAuthResult
