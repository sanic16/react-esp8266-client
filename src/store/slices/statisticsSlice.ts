import api from "./apiSlice";

const statisticsSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getStatusCountByDevice: builder.query<StatusCountByDevice, {device_id: number}>({
            query: (body) => ({
                url: `devices/status/count/${body.device_id}`,
                method: 'GET'
            })
        }),          
    })
})

export const {
    useLazyGetStatusCountByDeviceQuery
} = statisticsSlice