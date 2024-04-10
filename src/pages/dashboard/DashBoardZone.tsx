import DashBoardZoneButton from "./DashBoardZoneButton"

const DashBoardZone = (
    {
        zone_data,
        zone_name
    }:{
        zone_data: {
            id: number
            name: string
        }[],
        zone_name: string
    }
) => {
  return (
    <div
        className='dashboard__zone'
    > 
            
        <h4>
            { zone_name }
        </h4>
        <div className='dashboard__zone-actions'>                
        {

            zone_data.map(item => (
                <div key={item.id}>
                    <p>
                        { item.name}
                    </p>
                    <DashBoardZoneButton zone_name={zone_name} id={item.id}/>
                </div>
            ))
        }
        
        </div>
            
    </div>
  )
}

export default DashBoardZone