import { Outlet, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setZones, setDevices, setSubZones } from "../../store/slices/esp8266StateSlice"
import { 
  useLazyGetZonesQuery,
  useLazyGetSubZonesQuery,
  useLazyGetDevicesQuery
} from "../../store/slices/esp8266ApiSlice"
import { useEffect } from "react"
import { toast } from "react-toastify"

const PrivateLayout = () => {

  const [getZones, {data: zones, isError: zonesError}] = useLazyGetZonesQuery()
  const [getSubZones, {data: subZones, isError: subZonesError}] = useLazyGetSubZonesQuery()
  const [getDevices, {data: devices, isError: devicesError}] = useLazyGetDevicesQuery()
  
  const dispatch = useDispatch()

  const user = useSelector((state: { auth: AuthState }) => state.auth.user)


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

  useEffect(() => {
    if(zonesError || subZonesError || devicesError){
      toast.error('Error cargando datos')
    }
  }, [zonesError, subZonesError, devicesError])
  
  useEffect(() => {
    getZones()
    getSubZones()
    getDevices()  
    console.log('getZones, getSubZones, getDevices')
  }, [getZones, getSubZones, getDevices])
 

  return user ? <Outlet /> : <Navigate to="/login?redirect=/dashboard" />
}

export default PrivateLayout

