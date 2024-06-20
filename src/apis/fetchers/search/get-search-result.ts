import { API_ENDPOINT } from '@/apis/api-endpoint'
import { PublicRequest } from '@/apis/types/common'
import { Tag } from '@/apis/types/dto/place.dto'
import { apiClient } from '@/lib/api-client'

interface GetSearchResultParams extends PublicRequest {
  queryParams: {
    keyword: string
  }
}

interface GetSearchResultResponse {
  districts: string[]
  stations: string[]
  places: {
    id: number
    name: string
    tags: Tag[]
    simpleAddress: string
    representationImage: string
    latitude: number
    longitude: number
  }[]
}

export const getSearchResult = async (params: GetSearchResultParams) => {
  return await apiClient.fetch<GetSearchResultResponse>({
    ...API_ENDPOINT.search.searchByKeyword(),
    query: {
      ...params.queryParams,
    },
  })
}
