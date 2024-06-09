'use client'

import { useState } from 'react'
import NaverMap from './components/naver-map'
import { PlaceItem } from '@/components/ui/place-item'
import { mockingPlaceList } from './mocks'
import Marker from './components/marker'
import SearchInput from '@/components/search-input'
import Link from 'next/link'

export default function Place() {
  const [currentPlace, setCurrentPlace] = useState(mockingPlaceList[0])

  const mapOptions = {
    minZoom: 9,
    scaleControl: false,
    mapDataControl: false,
  }

  return (
    <>
      <NaverMap mapOptions={mapOptions}>
        {mockingPlaceList.map((place) => {
          const { id, latitude, longitude } = place
          return (
            <Marker
              key={id}
              id={id}
              coordinates={{ lat: latitude, lng: longitude }}
              onClick={() => setCurrentPlace(place)}
              active={currentPlace.id === id}
            />
          )
        })}
      </NaverMap>
      <div className="absolute top-[77px] mx-[calc(50%-160px)] w-[320px]">
        <SearchInput />
      </div>
      <Link
        href={`/place/${currentPlace.id}`}
        className="absolute bottom-0 w-full bg-background-secondary"
      >
        <PlaceItem place={currentPlace} />
      </Link>
    </>
  )
}
