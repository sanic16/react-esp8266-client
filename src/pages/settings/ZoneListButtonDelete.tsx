import { toast } from "react-toastify"
import { 
    useDeleteZoneMutation,
    useDeleteSubZoneMutation,
    useDeleteDeviceMutation
} from "../../store/slices/esp8266ApiSlice"
import { useDispatch } from "react-redux"
import { deleteDevice, deleteSubZone, deleteZone } from "../../store/slices/esp8266StateSlice"
import { useBlockContext } from "../../hooks/useContext"

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
    const { block, unblock } = useBlockContext()

    const handleDelete = async () => {
        try {
            switch (type) {
                case 'zone':
                    block()
                    await deleteZoneMutation({ id }).unwrap()
                    toast.success('Zona eliminada correctamente')
                    dispatch(deleteZone(id))
                    unblock()
                    break
                case 'subZone':
                    block()
                    await deleteSubZoneMutation({ id }).unwrap()
                    toast.success('Subzona eliminada correctamente')
                    dispatch(deleteSubZone(id))
                    unblock()
                    break
                case 'device':
                    block()
                    await deleteDeviceMutation({ id }).unwrap()
                    toast.success('Dispositivo eliminado correctamente')
                    dispatch(deleteDevice(id))
                    unblock()
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