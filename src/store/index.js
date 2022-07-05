import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/users'

export default configureStore({
  reducer: {
    users: userReducer
  }
})