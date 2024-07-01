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
    getRoomById: () => ({}),

    getRoomPhotos: (roomId: number) => ({
      url: `/rooms/${roomId}/photos`,
      method: HttpMethod.GET,
    }),
  },

  search: {
    searchByKeyword: () => ({
      url: `/regions`,
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
}
