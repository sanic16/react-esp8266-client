import { useState } from 'react'
import DashBoardZone from './DashBoardZone'
import './dashboard.css'
import PageHeader from '../../components/page-header/PageHeader'

const home = [
  {
    id: 1, 
    name: 'Zona 1',
    subZones: [
      {
        id: 1,
        name: 'Cocina',
        devices: [
          {
            id: 1,
            name: 'Iluminación 1',
            status: 'ON',
            endpoint: 'http://localhost:3000/gpio/1'
          },
          {
            id: 2,
            name: 'Iluminación 2',
            status: 'OFF',
            endpoint: 'http://localhost:3000/gpio/2'
          },
          {
            id: 3,
            name: 'Iluminación 3',
            status: 'ON',
            endpoint: 'http://localhost:3000/gpio/3'
          }
        ]
      },
      {
        id: 2,
        name: 'Sala',
        devices: [
          {
            id: 1,
            name: 'Iluminación 1',
            status: 'ON',
            endpoint: 'http://localhost:3000/gpio/1'
          },
          {
            id: 2,
            name: 'Iluminación 2',
            status: 'OFF',
            endpoint: 'http://localhost:3000/gpio/2'
          }
        ]
      }
    ]
  },
  {
    id: 2, 
    name: 'Zona 2',
    subZones: [
      {
        id: 1,
        name: 'Cocina',
        devices: [
          {
            id: 1,
            name: 'Iluminación 1',
            status: 'ON',
            endpoint: 'http://localhost:3000/gpio/1'
          },
          {
            id: 2,
            name: 'Iluminación 2',
            status: 'OFF',
            endpoint: 'http://localhost:3000/gpio/2'
          }
        ]
      },
      {
        id: 2,
        name: 'Sala',
        devices: [
          {
            id: 1,
            name: 'Iluminación 1',
            status: 'ON',
            endpoint: 'http://localhost:3000/gpio/1'
          },
          {
            id: 2,
            name: 'Iluminación 2',
            status: 'OFF',
            endpoint: 'http://localhost:3000/gpio/2'
          }
        ]
      }
    ]
  }
]

const zones = home.map(zone => zone.name)

const Dashboard = () => {
  const [zoneCursor, setZoneCursor] = useState(0)
  

  return (
    <section className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <div 
          className="dashboard__zones"
        >
          <PageHeader
            headers={zones}
            cursor={zoneCursor}
            onHandleClick={setZoneCursor}
          />

          <div
            className='dashboard__zones-content'
          >
            {
              home[zoneCursor].subZones.map(subZone => (
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