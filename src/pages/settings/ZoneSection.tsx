import { toast } from "react-toastify"
import CreateForm from "../../components/createForm/CreateForm"
import { 
        useCreateZoneMutation,
        useGetZonesQuery
} from "../../store/slices/esp8266ApiSlice"
import { useDispatch } from "react-redux"
import { setZones } from "../../store/slices/esp8266StateSlice"
import Loader from "../../components/loader/Loader"
import ZoneList from "./ZoneList"


const ZoneSection = () => {
  
  const { data: zones, isLoading: isLoadingZones, refetch } = useGetZonesQuery()   
  const [createZone, { isLoading }] = useCreateZoneMutation()
  const dispatch = useDispatch()
  
  const handleCreateZone = async (name: string) => {
    if(name === ''){
        toast.error('El nombre no puede estar vacío')
        return
    }
    if(zones?.find(zone => zone.name === name)){
        toast.error('La zona ya existe')
        return
    }
    if(name.length > 20 || name.length < 3){
        toast.error('El nombre debe tener entre 3 y 20 caracteres')
        return
    }
    try {
        const zone = await createZone({ name: name }).unwrap()
        toast.success('Zona creada')
        dispatch(setZones({ name: zone.name, id: zone.id }))
        refetch()
    } catch (error) {
        toast.error('Error al crear la zona')
    }
  }

  return (
    <div className="zone__section">
        <CreateForm 
            title="Crear Zona"
            isLoading={isLoading}
            onHandleSubmit={handleCreateZone}
        />
        <div className="zone__content">
            <h3>
                Zonas
            </h3>
            {
                isLoadingZones ? (
                    <Loader />
                ) : (
                    zones && <ZoneList list={zones} type="zone" />
                )
            }   
        </div>
        
    </div>
  )
}

export default ZoneSection