import { toast } from "react-toastify"
import { 
    useDeleteZoneMutation,
    useDeleteSubZoneMutation,
    useDeleteDeviceMutation
} from "../../store/slices/esp8266ApiSlice"
import { useDispatch } from "react-redux"
import { deleteDevice, deleteSubZone, deleteZone } from "../../store/slices/esp8266StateSlice"

const ZoneListButtonDelete = (
        {
            type,
            id,
        }:{
            type: 'zone' | 'subZone' | 'device'
            id: number
        }
    ) => {
    const [deleteZoneMutation, { isLoading: isLoadingZone }] = useDeleteZoneMutation()
    const [deleteSubZoneMutation, { isLoading: isLoadingSubZone }] = useDeleteSubZoneMutation()
    const [deleteDeviceMutation, { isLoading: isLoadingDevice }] = useDeleteDeviceMutation()  
    const dispatch = useDispatch()

    const handleDelete = async () => {
        try {
            switch (type) {
                case 'zone':
                    await deleteZoneMutation({ id }).unwrap()
                    dispatch(deleteZone(id))
                    toast.success('Zona eliminada correctamente')
                    break
                case 'subZone':
                    await deleteSubZoneMutation({ id }).unwrap()
                    dispatch(deleteSubZone(id))
                    toast.success('Subzona eliminada correctamente')
                    break
                case 'device':
                    await deleteDeviceMutation({ id }).unwrap()
                    dispatch(deleteDevice(id))
                    toast.success('Dispositivo eliminado correctamente')
                    break
            }
        } catch (error) {
            toast.error('Error al eliminar')
        }
    }
  return (
    <button
        className={`btn danger ${isLoadingZone || isLoadingSubZone || isLoadingDevice ? 'disabled' : ''}`}
        disabled={isLoadingZone || isLoadingSubZone || isLoadingDevice}
        onClick={handleDelete}
    >
        { isLoadingZone || isLoadingSubZone || isLoadingDevice ? 'Eliminando...' : 'Eliminar'}
    </button>
  )
}

export default ZoneListButtonDelete