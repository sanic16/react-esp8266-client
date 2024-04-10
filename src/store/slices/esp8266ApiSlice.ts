import api from "./apiSlice"

const esp8266ApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        createZone: builder.mutation<void, {name: string}>({
            query: (body) => ({
                url: 'zones',
                method: 'POST',
                body: body
            })
        }),
        getZones: builder.query<{id: number, name: string}[], void>({
            query: () => 'zones'
        }),
        createSubZone: builder.mutation<void, {name: string, zone_id: string}>({
            query: (body) => ({
                url: 'subzones',
                method: 'POST',
                body: body
            })
        }),
        getSubZones: builder.query<{id: number, name: string, zone_id: string}[], void>({
            query: () => 'subzones'
        }),
        createDevice: builder.mutation<void, {name: string, subzone_id: string}>({
            query: (body) => ({
                url: 'devices',
                method: 'POST',
                body: body
            })
        }),
        getDevices: builder.query<{id: number, name: string, subzone_id: string}[], void>({
            query: () => 'devices'
        })
    })
})

export const {
    useCreateSubZoneMutation,
    useGetSubZonesQuery,
    useCreateZoneMutation,
    useGetZonesQuery,
    useCreateDeviceMutation,
    useGetDevicesQuery
} = esp8266ApiSlice