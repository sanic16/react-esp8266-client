import { toast } from "react-toastify"
import CreateForm from "../../components/createForm/CreateForm"
import { 
        useCreateDeviceMutation,
        useGetDevicesQuery
} from "../../store/slices/esp8266ApiSlice"
import { useDispatch, useSelector } from "react-redux"
import { setDevices } from "../../store/slices/esp8266StateSlice"
import Loader from "../../components/loader/Loader"
import { useEffect, useState } from "react"
import ZoneList from "./ZoneList"


const DeviceSection = () => {
  
  const [endpoint, setEndpoint] = useState<string>('http://localhost/led?id=1&status=0')
  const { data: devices, isLoading: isLoadingZones, refetch } = useGetDevicesQuery() 
  const [createDevice, { isLoading }] = useCreateDeviceMutation()
  const [subZoneId, setSubZoneId] = useState<number>(0)

  const dispatch = useDispatch()

  const { subZones } = useSelector((state: {esp8266: ESP8266State}) => state.esp8266 )
  
  const handleCreateZone = async (name: string) => {
    if(name === ''){
        toast.error('El nombre no puede estar vacío')
        return
    }
    if(devices?.find(device => device.name === name)){
        toast.error('La zona ya existe')
        return
    }
    if(name.length > 20 || name.length < 3){
        toast.error('El nombre debe tener entre 3 y 20 caracteres')
        return
    }
    try {
        const device = await createDevice({ name: name, subzone_id: subZoneId, status: false, endpoint: endpoint }).unwrap()
        toast.success('Dispositivo creado')
        dispatch(setDevices(device))
        refetch()
    } catch (error) {
        toast.error('Error al crear la zona')
    }
  } 

//   useEffect(() => {
//     if(devices){
//         devices.map(device => dispatch(setDevices({ name: device.name, id: device.id, subzone_id: device.subzone_id})))
//     }
//   }, [devices, dispatch])

  useEffect(() => {
    if(subZones.length > 0) setSubZoneId(subZones[0].id)
  }, [subZones])

  return (
    <div className="zone__section">
        {
            subZones.length > 0 && (
                <>
                    <CreateForm 
                        title="Crear Dispositivo"
                        isLoading={isLoading}
                        onHandleSubmit={handleCreateZone}
                        options={subZones}
                        onHandleSelect={(id) => setSubZoneId(id)}
                        inputPlaceholder="Nombre del dispositivo"
                        endpoint={endpoint}
                        onHandleEndpoint={(endpoint) => setEndpoint(endpoint)}
                    />
                    <div className="zone__content">
                        <h3>
                            Áreas   
                        </h3>
                        {
                            isLoadingZones ? (
                                <Loader />
                            ) : (
                                devices && <ZoneList list={devices} type="device"/>
                            )
                        }   
                    </div>
                </>
            )
        }
        
    </div>
  )
}

export default DeviceSection