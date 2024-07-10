import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface GetUserInfoResponse {
  id: string
  nickname: string
  oauthProvider: 'GOOGLE' | 'KAKAO'
}

export const getUserInfo = async () => {
  return await apiClient.fetch<GetUserInfoResponse>({
    ...API_ENDPOINT.user.getUserinfo(),
  })
}
