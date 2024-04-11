import api from "./apiSlice"

const esp8266ApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        createZone: builder.mutation<Zone, {name: string}>({
            query: (body) => ({
                url: 'zones',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Zone']
        }),
        getZones: builder.query<Zone[], void>({
            query: () => 'zones',
            providesTags: ['Zone']
        }),
        deleteZone: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `zones/${body.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Zone', 'SubZone', 'Device']
        }),
        createSubZone: builder.mutation<SubZone, {name: string, zone_id: number}>({
            query: (body) => ({
                url: 'subzones',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['SubZone']
        }),
        getSubZones: builder.query<SubZone[], void>({
            query: () => 'subzones',
            providesTags: ['SubZone']
        }),
        deleteSubZone: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `subzones/${body.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['SubZone', 'Device']
        }),

        createDevice: builder.mutation<Device, {name: string, subzone_id: number, status: boolean}>({
            query: (body) => ({
                url: 'devices',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Device']
        }),
        getDevices: builder.query<Device[], void>({
            query: () => 'devices',
            providesTags: ['Device']
        }),
        deleteDevice: builder.mutation<void, {id: number}>({
            query: (body) => ({
                url: `devices/${body.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Device']
        })
    })
})

export const {
    useCreateSubZoneMutation,
    useGetSubZonesQuery,
    useDeleteZoneMutation,
    useCreateZoneMutation,
    useGetZonesQuery,
    useDeleteSubZoneMutation,
    useCreateDeviceMutation,
    useGetDevicesQuery,
    useDeleteDeviceMutation
} = esp8266ApiSlice