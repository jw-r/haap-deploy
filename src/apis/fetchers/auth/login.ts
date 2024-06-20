import { API_ENDPOINT } from '@/apis/api-endpoint'
import { CredentialRequest } from '@/apis/types/common'
import { apiClient } from '@/lib/api-client'

interface LoginParams extends CredentialRequest {
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
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
    },
  })
}
