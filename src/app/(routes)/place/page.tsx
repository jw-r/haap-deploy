'use client'

import { useState } from 'react'
import NaverMap from './components/naver-map'
import { mockingPlaceList } from './mocks'
import Marker from './components/marker'

export default function Place() {
  const [currentPlaceId, setCurrentPlaceId] = useState(mockingPlaceList[0].id)
  const mapOptions = {
    minZoom: 9,
    scaleControl: false,
    mapDataControl: false,
  }

  return (
    <NaverMap mapOptions={mapOptions}>
      {mockingPlaceList.map(({ id, latitude, longitude }) => (
        <Marker
          key={id}
          id={id}
          coordinates={{ lat: latitude, lng: longitude }}
          onClick={() => setCurrentPlaceId(id)}
          active={currentPlaceId === id}
        />
      ))}
    </NaverMap>
  )
}
