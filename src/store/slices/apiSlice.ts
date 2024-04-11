import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers) => {
            const auth: AuthState = JSON.parse(localStorage.getItem('auth') as string)
            if(auth && auth.access_token){
                headers.set('Authorization', `Bearer ${auth.access_token}`)
            }
            return headers
        },
        
    }),
    tagTypes: ['Zone', 'SubZone', 'Device'],
    endpoints: () => ({}),
})

export default api