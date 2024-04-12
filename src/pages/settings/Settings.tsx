import { useState } from 'react'
import { useSelector } from 'react-redux'
import PageHeader from '../../components/page-header/PageHeader'
import ZoneSection from './ZoneSection'
import SubZoneSection from './SubZoneSection'
import DeviceSection from './DeviceSection'
import './settings.css'
import { toast } from 'react-toastify'


const headers = [
  'Zonas',
  'Áreas',
  'Dispositivos',
]

const Settings = () => {
  const [cursor, setCursor] = useState(0)
  const esp8266 = useSelector((state: {esp8266: ESP8266State}) => state.esp8266)

  const sections = [
    <ZoneSection />,
    <SubZoneSection />,
    <DeviceSection /> 
  ]

  const handleHeaderClick = (index: number) => {
    if(index === 1 && esp8266.zones.length === 0){
      toast.error('Primero debes crear una zona')
      return
    }else if(index === 2 && esp8266.subZones.length === 0){
      toast.error('Primero debes crear un área')
      return 
    }
    setCursor(index)

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
            onHandleClick={handleHeaderClick}            
          />
          <div className="settings__content">
            {
              sections[cursor]
            }
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Settings