import Image from 'next/image'
import icons from '@/constants/icons'
import { PlaceItem } from '@/components/ui/place-item'
import { useGetSearchResult } from '@/apis/fetchers/search/get-search-result/query'
import { useMemo } from 'react'
import Link from 'next/link'

interface SearchResultProps {
  searchValue: string
}

export function SearchResult({ searchValue }: SearchResultProps) {
  const { data: searchResultData, isFetching } = useGetSearchResult({
    queryParams: {
      keyword: searchValue,
    },
  })

  const { districts, places, stations } = searchResultData
  const isDistrictsOrStations = useMemo(
    () => !!(districts.length || stations.length),
    [districts, stations],
  )
  const isPlaces = useMemo(() => !!places.length, [places])

  if (!isDistrictsOrStations && !isPlaces && !isFetching) {
    return <div>검색 결과가 없습니다</div>
  }
  return (
    <>
      {isDistrictsOrStations && (
        <div className="mx-[6px] flex w-full flex-col gap-[12px]">
          <div className="text-[12px] text-gray">지역</div>
          {districts.map((name, index) => (
            <Link
              href={{
                pathname: '/place',
                query: {
                  address: name,
                },
              }}
              key={name}
              className="flex items-center gap-2"
            >
              <Image key={index} src={icons.MarkerSmallIcon} width={12} height={12} alt="" />
              <span>{name}</span>
            </Link>
          ))}
          {stations.map((name, index) => (
            <Link
              href={{
                pathname: '/place',
                query: {
                  station: name,
                },
              }}
              key={name}
              className="flex items-center gap-2"
            >
              <Image key={index} src={icons.MarkerSmallIcon} width={12} height={12} alt="" />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      )}
      {isDistrictsOrStations && isPlaces && <hr className="w-full border-background-secondary" />}
      {isPlaces && (
        <div className="flex w-full flex-col gap-[12px]">
          <div className="mx-[6px] flex items-center justify-between text-[12px] text-gray">
            장소
            <Link
              href={{
                pathname: '/place',
                query: {
                  keyword: searchValue,
                },
              }}
              className="rounded-full bg-background-secondary p-[8px]"
            >
              지도보기
            </Link>
          </div>
          {places.map((place) => (
            <Link
              href={`/place/${place.id}`}
              key={place.id}
              className="rounded-[12px] bg-background-secondary"
            >
              <PlaceItem place={place} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
