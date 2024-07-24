import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface GetUserInfoRequest {
  accessToken: string
}

interface GetUserInfoResponse {
  id: string
  nickname: string
  oauthProvider: 'GOOGLE' | 'KAKAO'
}

export const getUserInfo = async (params: GetUserInfoRequest) => {
  return await apiClient.fetch<GetUserInfoResponse>({
    ...API_ENDPOINT.user.getUserinfo(),
    headers: {
      Authorization: `Bearer ${params?.accessToken}`,
    },
  })
}
