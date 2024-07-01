import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

interface LoginParams extends NextFetchRequestConfig {
  identity: string
  password: string
}

interface LoginResponse {}

export const login = async (params: LoginParams) => {
  return await apiClient.fetch<LoginResponse>({
    ...API_ENDPOINT.auth.login(),
    body: {
      identity: params.identity,
      password: params.password,
    },
  })
}
