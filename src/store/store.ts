import { configureStore } from "@reduxjs/toolkit";
import api from "./slices/apiSlice";
import authReducer from './slices/authSlice'
import esp8266Reducer from './slices/esp8266StateSlice'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        esp8266: esp8266Reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true
})

export default store 