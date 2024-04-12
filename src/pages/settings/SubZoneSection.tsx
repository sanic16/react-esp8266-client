import { toast } from "react-toastify"
import CreateForm from "../../components/createForm/CreateForm"
import { 
        useCreateSubZoneMutation,
        useGetSubZonesQuery
} from "../../store/slices/esp8266ApiSlice"
import { useDispatch, useSelector } from "react-redux"
import { setSubZones } from "../../store/slices/esp8266StateSlice"
import Loader from "../../components/loader/Loader"
import { useEffect, useState } from "react"
import ZoneList from "./ZoneList"


const SubZoneSection = () => {
  
  const { data: subZones, isLoading: isLoadingZones, refetch } = useGetSubZonesQuery()  
  const [createSubZone, { isLoading }] = useCreateSubZoneMutation()
  const [zone_id, setZoneId] = useState<number>(0)

  const dispatch = useDispatch()

  const { zones } = useSelector((state: {esp8266: ESP8266State}) => state.esp8266 )
  
  const handleCreateZone = async (name: string) => {
    if(name === ''){
        toast.error('El nombre no puede estar vacío')
        return
    }
    if(subZones?.find(zone => zone.name === name)){
        toast.error('La zona ya existe')
        return
    }
    if(name.length > 20 || name.length < 3){
        toast.error('El nombre debe tener entre 3 y 20 caracteres')
        return
    }
    try {
        const subZone = await createSubZone({ name: name, zone_id: zone_id }).unwrap()
        toast.success('Zona creada')
        dispatch(setSubZones({ name: subZone.name, id: subZone.id, zone_id: subZone.zone_id}))
        refetch()
    } catch (error) {
        toast.error('Error al crear la zona')
    }
  } 

  useEffect(() => {
    if(subZones){
        subZones.map(subZone => dispatch(setSubZones({ name: subZone.name, id: subZone.id, zone_id: subZone.zone_id})))
    }
  }, [subZones, dispatch])

  useEffect(() => {
    if (zones.length > 0) setZoneId(zones[0].id)
  }, [zones])

  console.log(zone_id)

  return (
    <div className="zone__section">
        {
            zones.length > 0 && (
                <>
                <CreateForm 
                    title="Crear Área"
                    isLoading={isLoading}
                    onHandleSubmit={handleCreateZone}
                    options={zones}
                    onHandleSelect={(id) => setZoneId(id)}
                    inputPlaceholder="Nombre del área"
                />
                <div className="zone__content">
                    <h3>
                        Áreas   
                    </h3>
                    {
                        isLoadingZones ? (
                            <Loader />
                        ) : (
                            subZones && <ZoneList list={subZones} type="subZone"/>
                        )
                    }   
                </div>
                </>
        )}
        
    </div>
  )
}

export default SubZoneSection