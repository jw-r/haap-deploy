import NaverMap from './components/naver-map'

export default function Place() {
  const mapOptions = {
    minZoom: 9,
    scaleControl: false,
    mapDataControl: false,
  }
  return <NaverMap mapOptions={mapOptions} />
}
