import { mockingPlaceList } from '@/app/(routes)/place/mocks'
import { mockingDistricts, mockingStations } from '../mocks'
import Image from 'next/image'
import icons from '@/constants/icons'
import { PlaceItem } from '@/components/ui/place-item'

interface SearchResultProps {
  searchValue: string | null
}

export function SearchResult({ searchValue }: SearchResultProps) {
  const { districts, stations, places } = {
    districts: mockingDistricts,
    stations: mockingStations,
    places: mockingPlaceList,
  }
  return searchValue ? (
    <>
      <div className="mx-[6px] flex w-full flex-col gap-[12px]">
        <div className="text-[12px] text-gray">지역</div>
        {districts.map(({ name, count }, index) => (
          <div key={name} className="flex items-center gap-2">
            <Image key={index} src={icons.MarkerSmallIcon} width={12} height={12} alt="" />
            <span>{name}</span>
            <span className="text-[12px] text-point">{count}</span>
          </div>
        ))}
        {stations.map(({ name, count }, index) => (
          <div key={name} className="flex items-center gap-2">
            <Image key={index} src={icons.MarkerSmallIcon} width={12} height={12} alt="" />
            <span>{name}</span>
            <span className="text-[12px] text-point">{count}</span>
          </div>
        ))}
      </div>
      <hr className="w-full border-background-secondary" />
      <div className="flex w-full flex-col gap-[12px]">
        <div className="mx-[6px] flex items-center justify-between text-[12px] text-gray">
          장소
          <button className="rounded-full bg-background-secondary p-[8px]">지도보기</button>
        </div>
        {places.map((place) => (
          <div key={place.id} className="rounded-[12px] bg-background-secondary">
            <PlaceItem place={place} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <div className="flex h-full flex-col justify-center">검색어가 없습니다</div>
  )
}
