import DashBoardZoneButton from "./DashBoardZoneButton"

const DashBoardZone = (
    {
        devices,
        subZoneName
    }:{
        devices: Device[],
        subZoneName: string
    }
) => {
  return (
    <div
        className='dashboard__zone'
    > 
            
        {
            devices.length > 0 ? (
                <>
                    <h4>
                        { subZoneName }
                    </h4>
                    <div className='dashboard__zone-actions'>                
                    {

                        devices.map(device => (
                            <div key={device.id}>
                                <p>
                                    { device.name}
                                </p>
                                <DashBoardZoneButton device={device}/>
                            </div>
                        ))
                    }
                    
                    </div>
                </>
            ) : (
                <h3 className="dashboard__zone-empty-header">
                    Agrega un dispositivo a esta zona
                </h3>
            )
        }
            
    </div>
  )
}

export default DashBoardZone