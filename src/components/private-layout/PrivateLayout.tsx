import { Outlet, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setZones, setDevices, setSubZones } from "../../store/slices/esp8266StateSlice"
import { 
  useGetZonesQuery, 
  useGetSubZonesQuery, 
  useGetDevicesQuery 
} from "../../store/slices/esp8266ApiSlice"
import { useEffect } from "react"
import Loader from "../loader/Loader"

const PrivateLayout = () => {

  const { data: zones, error: zonesError, isLoading: zonesLoading } = useGetZonesQuery()
  const { data: subZones, error: subZonesError, isLoading: subZonesLoading } = useGetSubZonesQuery()
  const { data: devices, error: devicesError, isLoading: devicesLoading } = useGetDevicesQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    if (zones) {
      zones.forEach(zone => dispatch(setZones(zone)))
    }
  }, [zones, dispatch])
  
  useEffect(() => {
    if (subZones) {
      subZones.forEach(subZone => dispatch(setSubZones(subZone)))
    }
  }, [subZones, dispatch])

  useEffect(() => {
    if (devices) {
      devices.forEach(device => dispatch(setDevices(device)))
    }
  }, [devices, dispatch])

  const user = useSelector((state: { auth: AuthState }) => state.auth.user)

  return (zonesLoading || subZonesLoading || devicesLoading) ? 
    <Loader /> : (zonesError || subZonesError || devicesError) ? (
      <h1>
        Error al cargar los datos, por favor recargue la página o intente más tarde
      </h1>
    ) : user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateLayout