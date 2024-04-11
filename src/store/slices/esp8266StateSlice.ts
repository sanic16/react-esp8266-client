import { createSlice } from "@reduxjs/toolkit";

const initialState: ESP8266State = localStorage.getItem('esp8266') ?
JSON.parse(localStorage.getItem('esp8266') as string) : {
    zones: [],
    subZones: [],
    devices: []    
} 

const esp8266StateSlice = createSlice({
    name: 'esp8266',
    initialState,
    reducers: {
        setZones: (state, action: { payload: Zone }) => {
            const newZone = action.payload;
            if (!state.zones.some(zone => zone.id === newZone.id)) {
                state.zones.push(newZone);
                localStorage.setItem('esp8266', JSON.stringify(state));
            }
        },
        deleteZone: (state, action: { payload: number }) => {
            const subZones = state.subZones.filter(subZone => subZone.zone_id === action.payload)
            state.devices = state.devices.filter(device => {
                return !subZones.some(subZones => subZones.id === device.subzone_id)
            })
            state.subZones = state.subZones.filter(subZone => subZone.zone_id !== action.payload)
            state.zones = state.zones.filter(zone => zone.id !== action.payload)
            console.log('aloha')
            localStorage.setItem('esp8266', JSON.stringify(state));
        },
        setSubZones: (state, action: { payload: SubZone}) => {
            const newSubZone = action.payload;
            if (!state.subZones.some(subZone => subZone.id === newSubZone.id)) {
                state.subZones.push(newSubZone);
                localStorage.setItem('esp8266', JSON.stringify(state));
            }
        },
        deleteSubZone: (state, action: { payload: number }) => {
            state.subZones = state.subZones.filter(subZone => subZone.id !== action.payload)
            state.zones = state.zones.filter(zone => zone.id !== action.payload)
        },
        setDevices: (state, action: { payload: Device}) => {
            const newDevice = action.payload;
            if (!state.devices.some(device => device.id === newDevice.id)) {
                state.devices.push(newDevice);
                localStorage.setItem('esp8266', JSON.stringify(state));
            }
        },
        deleteDevice: (state, action: { payload: number }) => {
            state.devices = state.devices.filter(device => device.id !== action.payload)
        },
        clear: (state) => {
            state.zones = []
            state.subZones = []
            state.devices = []
            localStorage.clear()
        }
    }  
})

export default esp8266StateSlice.reducer
export const {
    setZones,
    deleteZone,
    setSubZones,
    deleteSubZone,
    setDevices,
    deleteDevice,
    clear
} = esp8266StateSlice.actions