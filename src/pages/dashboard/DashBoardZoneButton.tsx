import { useEffect, useState } from "react"

const DashBoardZoneButton = (
    {
        zone_name,
        id
    }:{
        zone_name: string,
        id: string  
    }
) => {
  const [status, setStatus] = useState<'ON' | 'OFF'>(() => {
    return localStorage.getItem(zone_name + id) as 'ON' | 'OFF' || 'OFF'
  })

  useEffect(() => {
    localStorage.setItem(zone_name + id, status)

  }, [status, zone_name, id])

  const handleClick = () => {
    setStatus(prev => prev === 'ON' ? 'OFF' : 'ON')
  }
  return (
    <button
        className={`btn ${status === 'ON' ? 'on' : 'off'}`}
        onClick={handleClick}
    >
        { status }
    </button>
  )
}

export default DashBoardZoneButton