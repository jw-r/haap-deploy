'use client'

import { useContext, useEffect, useMemo, useState } from 'react'
import { MapContext } from './naver-map'
export type MarkerProps = {
  id: number
  coordinates: { lat: number; lng: number }
  onClick?: () => void
  active: boolean
}

const SMALL_MARKER = '/icons/MarkerSmallIcon.svg'
const BIG_MARKER = '/icons/MarkerIcon.svg'

const Marker = ({ coordinates, onClick, active }: MarkerProps): null => {
  const map = useContext(MapContext)
  const isMapReady = useMemo(() => !!map, [map])
  const [marker, setMarker] = useState<naver.maps.Marker | null>(null)
  useEffect(() => {
    if (!isMapReady || !map) return
    const newMarker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(coordinates),
      clickable: true,
    })
    setMarker(newMarker)
    const listenerEvent = onClick && newMarker?.addListener('click', onClick)
    return () => {
      if (listenerEvent) {
        naver.maps.Event.removeListener(listenerEvent)
      }
      marker?.setMap(null)
    }
  }, [isMapReady])

  useEffect(() => {
    marker?.setIcon({ url: active ? BIG_MARKER : SMALL_MARKER })
    marker?.draw()
  }, [active, marker])
  return null
}

export default Marker
