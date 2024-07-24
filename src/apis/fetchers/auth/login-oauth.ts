import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface LoginOauthParams {
  oauthProvider: 'KAKAO' | 'GOOGLE'
  accessToken: string
}

interface LoginOauthResponse {
  accessToken: string
}

export const loginOauth = async (params: LoginOauthParams) => {
  return await apiClient.fetch<LoginOauthResponse>({
    ...API_ENDPOINT.auth.loginOauth(),
    body: {
      ...params,
    },
  })
}
