import { useQuery } from '@tanstack/react-query'
import { GetSearchResultParams, getSearchResult } from './fetcher'

const getSearchResultKey = 'get-search-result'

export const useGetSearchResult = (props: GetSearchResultParams) => {
  return useQuery({
    queryKey: [getSearchResultKey, props.queryParams.keyword],
    queryFn: () => {
      if (!props.queryParams.keyword) return { districts: [], places: [], stations: [] }
      return getSearchResult(props)
    },
    initialData: { districts: [], places: [], stations: [] },
  })
}
