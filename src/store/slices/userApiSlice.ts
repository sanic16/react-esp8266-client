import api from './apiSlice'

const userApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<void, RegisterUser>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body: body
            })
        }),
        login: builder.mutation<LoggedInUser, LoginUser>({
            query: (body) => ({
                url: 'token',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Zone', 'SubZone', 'Device']
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: 'revoke',
                method: 'POST',
            })
        }) 
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation
} = userApiSlice