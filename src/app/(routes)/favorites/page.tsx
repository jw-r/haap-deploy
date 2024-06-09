import RoomItem from '@/components/ui/room-item'
import Header from '@/components/ui/header'
import { FavoriteRooms } from './mocks'

export default function Favorites() {
  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title="즐겨찾기" />
      {FavoriteRooms.map((room) => (
        <div key={room.id} className="w-full rounded-[12px] bg-background-secondary">
          <RoomItem room={room} />
          {room.comments && (
            <div className="mx-4 mb-5 bg-background p-2 text-[12px]">{`코멘트: ${room.comments}`}</div>
          )}
        </div>
      ))}
    </div>
  )
}
