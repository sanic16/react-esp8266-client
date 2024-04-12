import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const DashBoardZoneButton = (
    {
      device    
    }:{
      device: Device  
    }
) => {
  const [status, setStatus] = useState<'ON' | 'OFF'>(() => {
    return localStorage.getItem('device' + device.id.toString()) as 'ON' | 'OFF' || 'OFF'
  }) 
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('device' + device.id.toString(), status)
    
  }, [status, device.id])

  const URL = device.endpoint + (status === 'OFF' ? '1' : '0')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const jsonResponse = await response.json()
        if(response.ok){
          setStatus(jsonResponse.value === true ? 'ON' : 'OFF')
        }else{
          throw new Error('Error al obtener el estado del dispositivo')        
        }
        setIsError(false)        
      } catch (error) {
        toast.error('Error al obtener el estado del dispositivo ' + device.name)
        setIsError(true)
      }
    }
    fetchData()
  
  }, [URL, device.name])

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(URL, {
        method: 'POST'
      })
      const jsonResponse = await response.json()
      if(!response.ok){
        throw new Error('Error al cambiar el estado del dispositivo')
      }
      setStatus(jsonResponse.value === true ? 'ON' : 'OFF')
      setIsError(false)
    } catch (error) {
      toast.error('Error al cambiar el estado del dispositivo ' + device.name)
      setIsError(true)
    }
    setIsLoading(false)
  }
  return (
    <button
        className={`btn ${(status === 'ON' && !isError ) ? 'on' : (status === 'OFF' && !isError ) ? 'off' : ''} ${isError ? 'error' : ''}`}
        onClick={handleClick}
        disabled={isLoading}
        
    >
        { isLoading ? '...' : isError ? 'NA' : status }
    </button>
  )
}

export default DashBoardZoneButton