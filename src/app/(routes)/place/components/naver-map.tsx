'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

interface NaverMapProps {
  mapOptions: naver.maps.MapOptions
}

export default function NaverMap({ mapOptions }: NaverMapProps) {
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
      <div ref={mapRef} style={{ width: '100vw', height: '100vh' }} />
    </>
  )
}
