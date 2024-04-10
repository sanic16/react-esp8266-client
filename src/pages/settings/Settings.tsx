import { useState } from 'react'

import { 
  useCreateZoneMutation,
  useGetZonesQuery,
  useCreateSubZoneMutation,
  useGetSubZonesQuery,
  useCreateDeviceMutation,
  useGetDevicesQuery
} from '../../store/slices/esp8266ApiSlice'


import PageHeader from '../../components/page-header/PageHeader'
import CreateForm from '../../components/createForm/CreateForm'

import './settings.css'
import { toast } from 'react-toastify'

const headers = [
  'Zonas',
  'Áreas',
  'Dispositivos',
]

const Settings = () => {
  const [cursor, setCursor] = useState(0)
  const [createZone, { isLoading }] = useCreateZoneMutation()
  const handleCreateZone = async(name: string) => {
    try {
      await createZone({ name: name}).unwrap()
      toast.success('Zona creada correctamente')
    } catch (error) {
      toast.error('Error al crear la zona')
    }
}
  return (
    <section className="settings">
      <div className="container">
        <h1>
          Configuración
        </h1>
        <div className="settings__container">
          <PageHeader
            headers={headers}
            cursor={cursor}
            onHandleClick={setCursor}
          />
        </div>
        <div className="settings__content">
          <CreateForm
            isLoading={isLoading}
            onHandleSubmit={handleCreateZone}
          />
        </div>
      </div>
    </section>
  )
}

export default Settings