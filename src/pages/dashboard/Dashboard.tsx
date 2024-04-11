import { useCallback, useState } from 'react'
import DashBoardZone from './DashBoardZone'
import './dashboard.css'
import PageHeader from '../../components/page-header/PageHeader'
import { useSelector } from 'react-redux'




const Dashboard = () => {
  const [zoneCursor, setZoneCursor] = useState(0)
  const esp8266 = useSelector((state: { esp8266: ESP8266State }) => state.esp8266)

  const zonesName = esp8266.zones.map(zone => zone.name)
  
  const subZones = useCallback(() => {
    return esp8266.subZones.map(subZone => {
              const devices = esp8266.devices.filter(device => device.subzone_id === subZone.id)
                return {
                  ...subZone,
                  devices
                
                }
            })
  }, [esp8266.subZones, esp8266.devices])()

  const zones: {
      subZones: {
          devices: Device[];
          id: number;
          name: string;
          zone_id: number;
      }[];
      id: number;
      name: string;
  }[] = useCallback(() => {
    return esp8266.zones.map(zone => {
            const temp = subZones.filter(subZone => subZone.zone_id === zone.id)
            return {
              ...zone,
              subZones: temp
            }
          })
  }, [esp8266.zones, subZones])()

  return (
    <section className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <div 
          className="dashboard__zones"
        >
          <PageHeader
            headers={zonesName}
            cursor={zoneCursor}
            onHandleClick={setZoneCursor}
          />

          <div
            className='dashboard__zones-content'
          >
            {
              zones.length > 0 && 
                zones[zoneCursor].subZones.map(subZone => (
                  <DashBoardZone
                    zone_name={subZone.name}
                    zone_data={subZone.devices}
                    key={subZone.id}
                  />
                ))
              
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard