import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import StatusCount from "../../components/charts/status-count/StatusCount"
// import LineGraph from "../../components/charts/line-graph/LineGraph"

import './analytics.css'

const Analytics = () => {
  
  const [devices, setDevices] = useState<Device[]>(() => {
    return (JSON.parse(localStorage.getItem('esp8266') as string) as ESP8266State).devices
  })

  const { devices: devicesState } = useSelector((state: {esp8266: ESP8266State}) => state.esp8266)

  useEffect(() => {
    setDevices(devicesState)
  }, [devicesState])  

  return (
    <section className="analytics">

      <div className="container">
        <h1>Estadística</h1>

        <div className="analytics__container">
          {
            devices.map(device => (
              // <StatusCount 
              //   key={device.id}
              //   device_id={device.id}
              // />
              <StatusCount 
                key={device.id}
                device={device}
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Analytics