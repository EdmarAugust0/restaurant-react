import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantModel } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurant: builder.query<RestaurantModel[], void>({
      query: () => 'restaurantes'
    }),
    getPlate: builder.query<RestaurantModel, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeatureRestaurantQuery, useGetPlateQuery } = api
export default api
