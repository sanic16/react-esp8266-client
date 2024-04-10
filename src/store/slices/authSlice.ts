import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = localStorage.getItem('auth') ?
JSON.parse(localStorage.getItem('auth') as string) : {
    user: null,
    access_token: null,
    refresh_token: null,
    access_token_expires_in: null,
    refresh_token_expires_in: null
} 

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: { payload: LoggedInUser}) => {
            state.user = action.payload.user
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            state.access_token_expires_in = action.payload.access_token_expires_in
            state.refresh_token_expires_in = action.payload.refresh_token_expires_in

            localStorage.setItem('auth', JSON.stringify(state))
        },
        logout: (state) => {
            state.user = null
            state.access_token = null
            state.refresh_token = null
            state.access_token_expires_in = null
            state.refresh_token_expires_in = null

            localStorage.removeItem('auth')
        }
    }
})

export default authSlice.reducer
export const {
    login,
    logout
} = authSlice.actions

