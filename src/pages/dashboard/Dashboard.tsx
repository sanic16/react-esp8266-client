import { useState } from 'react'
import DashBoardZone from './DashBoardZone'
import './dashboard.css'
import { level_1, level_2 } from './dashBoard-data'

const Dashboard = () => {
  const [activeZone, setActiveZone] = useState({
    first_level: true,
    second_level: false
  })

  const handleClick = (zone: 'first_level' | 'second_level') => {
    setActiveZone({
      first_level: zone === 'first_level',
      second_level: zone === 'second_level'
    })
  }

  return (
    <section className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <div 
          className="dashboard__zones"
        >
          <div 
            className="dashboard__zones-header"
          >
            <div
              className='dashboard__zones-header-item'
            >
              <button
                className={activeZone.first_level ? 'active' : ''}
                onClick={() => handleClick('first_level')}
              >
                Primer Nivel
              </button>
            </div>
            <div
              className='dashboard__zones-header-item'
            >
              <button
                className={activeZone.second_level ? 'active' : ''}
                onClick={() => handleClick('second_level')}
              >
                Segundo Nivel
              </button>
            </div>
          </div>
          <div
            className='dashboard__zones-content'
          >
            {
              activeZone.first_level ? (
                level_1.map(zone => (
                  <DashBoardZone
                    key={zone.id}
                    zone_data={zone.dashboard}
                    zone_name={zone.name}
                  />
                ))
              ) : (
                level_2.map(zone => (
                  <DashBoardZone
                    key={zone.id}
                    zone_data={zone.dashboard}
                    zone_name={zone.name}
                  />
                ))  
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard