import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cart'
import loading from './slices/loading'
const store = configureStore({
  reducer: {
    cart,
    loading
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
