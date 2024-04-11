import ZoneListButtonDelete from "./ZoneListButtonDelete"

const ZoneList = (
    {
        type,
        list
    }:{
        type: 'zone' | 'subZone' | 'device'
        list: Zone[] | SubZone[] | Device[]
    }
) => {
 
  return (
    <ul
        className="zone__list"
    >
        {
            list.map(item=> (
                <li key={item.id}
                    className="zone__item"
                >
                    <p>
                        { item.name }
                    </p>
                    <button
                        className="btn primary"
                    >
                        Editar
                    </button>
                    <ZoneListButtonDelete
                        type={type}
                        id={item.id}
                    />

                </li>
            ))
        }
    </ul>
  )
}

export default ZoneList