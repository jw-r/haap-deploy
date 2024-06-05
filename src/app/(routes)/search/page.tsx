import SearchInput from '@/components/search-input'
import { mockingDistricts, mockingStations } from './mocks'
import { mockingPlaceList } from '../place/mocks'
import { PlaceItem } from '@/components/ui/place-item'
import Image from 'next/image'
import icons from '@/constants/icons'

export default function Search() {
  return (
    <div className="m-[24px] mt-[77px] flex flex-col items-center gap-4">
      <div className="mx-[calc(50%-160px)] w-[320px]">
        <SearchInput />
      </div>
      <div className="mx-[6px] flex w-full flex-col gap-[12px]">
        <div className="text-[12px] text-gray">지역</div>
        {mockingDistricts.map(({ name, count }, index) => (
          <div key={name} className="flex items-center gap-2">
            <Image key={index} src={icons.MarkerSmallIcon} width={12} height={12} alt="" />
            <span>{name}</span>
            <span className="text-[12px] text-point">{count}</span>
          </div>
        ))}
        {mockingStations.map(({ name, count }, index) => (
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
        {mockingPlaceList.map((place) => (
          <div key={place.id} className="rounded-[12px] bg-background-secondary">
            <PlaceItem place={place} />
          </div>
        ))}
      </div>
    </div>
  )
}
