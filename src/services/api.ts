import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantModel } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureRestaurantQuery,
  useGetPlateQuery,
  usePurchaseMutation
} = api
export default api
