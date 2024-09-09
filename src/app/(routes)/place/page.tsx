'use client'

import { useEffect, useMemo, useState } from 'react'
import NaverMap from './components/naver-map'
import { PlaceItem } from '@/components/ui/place-item'
import Marker from './components/marker'
import Link from 'next/link'
import type { Place } from '@/types'
import { useGetSearchResult } from '@/apis/fetchers/search/get-search-result/query'
import { useGetPlaces } from '@/apis/fetchers/place/get-places/query'
import AdornmentInput from '@/components/adornment-input'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface PlaceProps {
  searchParams: {
    keyword?: string
    station?: string
    address?: string
  }
}

export default function Place({ searchParams: { keyword, station, address } }: PlaceProps) {
  const router = useRouter()
  const searchKeyword = useMemo(() => keyword || station || address, [keyword, station, address])
  const [isShrink, setIsShrink] = useState(true)
  const {
    data: { places: keywordPlaceList },
  } = useGetSearchResult({
    queryParams: {
      keyword,
    },
  })

  const { data: locationPlaceList } = useGetPlaces({
    queryParams: {
      station,
      address,
    },
  })

  const placeList = useMemo(
    () =>
      keywordPlaceList.length
        ? keywordPlaceList
        : locationPlaceList?.length
          ? locationPlaceList
          : [],
    [keywordPlaceList, locationPlaceList],
  )

  const [currentPlace, setCurrentPlace] = useState(placeList[0])

  useEffect(() => {
    setCurrentPlace(placeList[0])
  }, [placeList])

  const mapOptions = {
    minZoom: 9,
    scaleControl: false,
    mapDataControl: false,
  }

  return (
    <>
      <NaverMap mapOptions={mapOptions}>
        {placeList
          .toSorted((a, b) => a.latitude - b.latitude)
          .map((place) => {
            const { id, latitude, longitude } = place
            return (
              <Marker
                key={id}
                id={id}
                coordinates={{ lat: latitude, lng: longitude }}
                onClick={() => setCurrentPlace(place)}
                active={currentPlace?.id === id}
              />
            )
          })}
      </NaverMap>
      <div className="absolute top-[77px] flex w-full flex-col items-center gap-2 px-[24px]">
        <AdornmentInput
          defaultValue={searchKeyword}
          onFocus={() => {
            router.push(`/home?keyword=${searchKeyword}`)
          }}
          StartAdornment={() => (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                router.back()
              }}
            >
              <ArrowLeft />
            </Button>
          )}
        />
        <button
          className="w-fit rounded-full bg-background-secondary p-[6px] text-[12px]"
          onClick={() => setIsShrink(!isShrink)}
        >
          {isShrink ? '목록 보기' : '목록 닫기'}
        </button>
      </div>
      {isShrink && currentPlace && (
        <Link
          href={`/place/${currentPlace.id}`}
          className="absolute bottom-0 w-full bg-background-secondary"
        >
          <PlaceItem place={currentPlace} />
        </Link>
      )}
      {!isShrink && (
        <div className="absolute bottom-0 h-[70vh] w-full bg-background-secondary">
          {placeList.map((place) => (
            <Link key={place.id} href={`/place/${place.id}`}>
              <PlaceItem place={place} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
