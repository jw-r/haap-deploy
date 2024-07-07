import RoomItem from '@/components/ui/room-item'
import { getRoomsByPlaceId } from '@/apis/fetchers/room/get-rooms-by-place-id/fetcher'
import Link from 'next/link'

interface PlaceRoomListProps {
  placeId: number
}

export default async function PlaceRoomList({ placeId }: PlaceRoomListProps) {
  const placeRoom = await getRoomsByPlaceId({ placeId })
  return placeRoom.map((room) => (
    <Link
      href={`/room/${room.id}`}
      className="flex flex-col gap-[8px] rounded-[12px] bg-background-secondary"
      key={room.id}
    >
      <RoomItem room={room} />
    </Link>
  ))
}
