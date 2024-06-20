import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface LoginOauthParams {
  OauthProvider: 'naver' | 'kakao' | 'google' | 'none'
  accessToken: string
}

interface LoginOauthResponse {}

export const loginOauth = async (params: LoginOauthParams) => {
  return await apiClient.fetch<LoginOauthResponse>({
    ...API_ENDPOINT.auth.loginOauth(),
    body: {
      OauthProvider: params.OauthProvider,
      accessToken: params.accessToken,
    },
  })
}
