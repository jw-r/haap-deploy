import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'
import { UserDTO } from '@/apis/types/dto/user.dto'

interface GetUserInfoRequest {
  accessToken: string
}

export const getUserInfo = async (params: GetUserInfoRequest) => {
  return await apiClient.fetch<UserDTO>({
    ...API_ENDPOINT.user.getUserinfo(),
    headers: {
      Authorization: `Bearer ${params?.accessToken}`,
    },
  })
}
