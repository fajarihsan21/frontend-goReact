import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        token: '',
        data: {}
    },
    reducers: {
        login(state, actions) {
            return {
                ...state,
                isAuth: true,
                token: actions.payload
            }
        }
    }
})

export const {login} = userSlice.actions

export default userSlice.reducer