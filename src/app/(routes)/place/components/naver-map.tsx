'use client'

import Script from 'next/script'
import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

interface NaverMapProps {
  mapOptions: naver.maps.MapOptions
  children: ReactNode
}

export const MapContext = createContext<naver.maps.Map | null>(null)

export default function NaverMap({ mapOptions, children }: NaverMapProps) {
  const [map, setMap] = useState<naver.maps.Map | null>(null)
  const mapRef = useRef(null)

  function initMap() {
    if (!mapRef.current) return
    const map = new window.naver.maps.Map(mapRef.current, mapOptions)
    setMap(map)
  }

  useEffect(() => {
    return map?.destroy()
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onReady={initMap}
      />
      <div ref={mapRef} className="h-screen w-screen" />
      {<MapContext.Provider value={map}>{children}</MapContext.Provider>}
    </>
  )
}
