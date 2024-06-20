import NextAuth, { Account, DefaultSession, NextAuthResult } from 'next-auth'
import Kakao from 'next-auth/providers/kakao'
import Google from 'next-auth/providers/google'
import Naver from 'next-auth/providers/naver'
import { UserDTO } from '@/apis/types/dto/user.dto'

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
    jwt: ({ token, account }) => {
      if (account) {
        try {
          /** TODO: request server accessToken */
          const accessToken = ''
          token.account = account
          token.accessToken = accessToken
        } catch (error) {
          throw new Error('Failed to get backend access token')
        }

        try {
          /** TODO: request user */
          const user = {}
          token.userDTO = user
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

      return session
    },
  },
}) satisfies NextAuthResult
