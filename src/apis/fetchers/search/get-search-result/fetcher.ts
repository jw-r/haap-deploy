import { API_ENDPOINT } from '@/apis/api-endpoint'
import { SimplePlace } from '@/apis/types/dto/place.dto'
import { apiClient } from '@/lib/api-client'

export interface GetSearchResultParams extends NextFetchRequestConfig {
  queryParams: {
    keyword?: string
  }
}

interface GetSearchResultResponse {
  districts: string[]
  stations: string[]
  places: SimplePlace[]
}

export const getSearchResult = async (params: GetSearchResultParams) => {
  return await apiClient.fetch<GetSearchResultResponse>({
    ...API_ENDPOINT.search.searchByKeyword(),
    query: {
      ...params.queryParams,
    },
  })
}
