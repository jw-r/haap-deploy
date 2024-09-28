import { HttpMethod } from '@/lib/api-client'

export const API_ENDPOINT = {
  review: {
    postReview: (roomId: number) => ({
      url: `/rooms/${roomId}/reviews`,
      method: HttpMethod.POST,
    }),

    getRoomsReviews: () => ({
      url: `/reviews`,
      method: HttpMethod.GET,
    }),

    getRoomReviews: (id: number) => ({
      url: `/rooms/${id}/reviews`,
      method: HttpMethod.GET,
    }),

    getMyReviews: () => ({
      url: `/myreviews`,
      method: HttpMethod.GET,
    }),
  },

  place: {
    getPlaces: () => ({
      url: `/places`,
      method: HttpMethod.GET,
    }),

    getPlaceById: (placeId: number) => ({
      url: `/places/${placeId}`,
      method: HttpMethod.GET,
    }),

    getPlacePhotos: (placeId: number) => ({
      url: `/places/${placeId}/photos`,
      method: HttpMethod.GET,
    }),
  },

  room: {
    getRoomsByPlaceId: (placeId: number) => ({
      url: `/places/${placeId}/rooms`,
      method: HttpMethod.GET,
    }),

    /** 미완 */
    getRoomById: (roomId: number) => ({
      url: `/places/rooms/${roomId}`,
      method: HttpMethod.GET,
    }),

    getRoomPhotos: (roomId: number) => ({
      url: `/rooms/${roomId}/photos`,
      method: HttpMethod.GET,
    }),
  },

  search: {
    searchByKeyword: () => ({
      url: `/places/search`,
      method: HttpMethod.GET,
    }),
  },

  bookmark: {
    postBookmark: () => ({
      url: `/favorites`,
      method: HttpMethod.POST,
    }),

    getBookmarks: () => ({
      url: `/favorites`,
      method: HttpMethod.GET,
    }),
  },

  auth: {
    loginOauth: () => ({
      url: `/login/oauth`,
      method: HttpMethod.POST,
    }),

    login: () => ({
      url: `/login`,
      method: HttpMethod.POST,
    }),
  },

  user: {
    getUserinfo: () => ({
      url: `/member-info`,
      method: HttpMethod.GET,
    }),
    getFavorites: () => ({
      url: `/favorites`,
      method: HttpMethod.GET,
    }),
  },
}
