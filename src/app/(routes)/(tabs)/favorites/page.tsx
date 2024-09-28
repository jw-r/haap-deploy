'use client'

import RoomItem from '@/components/ui/room-item'
import Header from '@/components/ui/header'
import { useQuery } from '@tanstack/react-query'
import { getFavorites } from '@/apis/fetchers/user/get-favorites'
import { useSession } from 'next-auth/react'
import NoItem from '@/components/no-item'

export default function Favorites() {
  const { data: session } = useSession()
  const { data: favoriteRooms, isPending } = useQuery({
    queryKey: ['get-favorites'],
    queryFn: () =>
      getFavorites({
        accessToken: session?.accessToken || '',
      }),
  })

  return (
    <div className="container flex flex-col gap-[18px] pb-[50px] pt-[77px]">
      <Header title="즐겨찾기" />
      {favoriteRooms?.map((room) => (
        <div key={room.roomId} className="w-full rounded-[12px] bg-background-secondary">
          <RoomItem room={room} />
          {room.comment && (
            <div className="mx-4 mb-5 bg-background p-2 text-[12px]">{`코멘트: ${room.comment}`}</div>
          )}
        </div>
      ))}
      {!isPending && favoriteRooms?.length === 0 && <NoItem />}
    </div>
  )
}
