import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestaurantModel } from '../../Pages/Home'

type CartState = {
  items: RestaurantModel[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantModel>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
