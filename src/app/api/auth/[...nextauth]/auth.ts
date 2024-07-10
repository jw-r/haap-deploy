import NextAuth, { Account, DefaultSession, NextAuthResult } from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import Google from 'next-auth/providers/google'
import Naver from 'next-auth/providers/naver'
import { UserDTO } from '@/apis/types/dto/user.dto'
import { loginOauth } from '@/apis/fetchers/auth/login-oauth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      accessToken: string
      account: Account
      dto: UserDTO
    } & DefaultSession['user']
  }
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
          const user = await loginOauth({
            accessToken: account.access_token,
            oauthProvider: account.provider.toUpperCase() as 'KAKAO' | 'GOOGLE',
          })
          token.userDTO = user
        } catch (error) {
          throw new Error('Failed to LogIn')
        }

        try {
          /* TODO Get User */
          // const user = await getUserInfo()
          // token.userDTO = user
        } catch (error) {
          throw new Error('Failed to get user')
        }
      }

      return token
    },

    session: ({ session, token }) => {
      session.user.id = token.sub || ''
      session.user.accessToken = token.accessToken as string
      session.user.account = token.account as Account
      session.user.dto = token.userDTO as UserDTO

      return session
    },
  },
}) satisfies NextAuthResult
