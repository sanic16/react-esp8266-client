/// <reference types="vite/client" />
interface LoginUser {
    email: string
    password: string
}

interface RegisterUser extends LoginUser {
    username: string
    name: string   
}

type LoggedInUser = {
    access_token: string
    access_token_expires_in: number
    refresh_token: string
    refresh_token_expires_in: number
    user: {
        username: string
        name: string
        is_active: false
    }
}

type AuthUser = {
    username: string
    name: string
    is_active: false
}

type AuthState = {
    user: AuthUser | null
    access_token: string | null
    refresh_token: string | null
    access_token_expires_in: number | null
    refresh_token_expires_in: number | null
}

type Zone = {
    id: number
    name: string
}

type SubZone = {
    id: number
    name: string
    zone_id: number
}

type Device = {
    id: number
    name: string
    subzone_id: number
    status : boolean
    endpoint: string
}

type CreateDevice = {
    name: string, 
    subzone_id: number, 
    status: boolean,
    endpoint: string
}


type ESP8266State = {
    zones: Zone[]
    subZones: SubZone[]
    devices: Device[]
}

type BlockContext = {
    isBlock: boolean
    block: () => void
    unblock: () => void
}

// ################ statisticsSlice ################
type StatusCountByDevice = {
    true_count: number
    false_count: number
    total: number
}