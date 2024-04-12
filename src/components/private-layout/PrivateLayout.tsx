import { Outlet, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setZones, setDevices, setSubZones } from "../../store/slices/esp8266StateSlice"
import { 
  useGetZonesQuery,
  useGetSubZonesQuery, 
  useGetDevicesQuery,
  // useLazyGetZonesQuery 
} from "../../store/slices/esp8266ApiSlice"
import { useEffect } from "react"
import { toast } from "react-toastify"

const PrivateLayout = () => {

  // const [getZones, {data: zones}] = useLazyGetZonesQuery()
  const { data: zones, error: zonesError } = useGetZonesQuery()
  const { data: subZones, error: subZonesError } = useGetSubZonesQuery()
  const { data: devices, error: devicesError } = useGetDevicesQuery()

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
  // useEffect(() => {
  //   getZones()
  // }, [getZones])
 

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateLayout

