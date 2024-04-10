import './pageHeader.css'

const PageHeader = (
    {
        headers,
        cursor,
        onHandleClick
    }:{
        headers: string[],
        cursor: number,
        onHandleClick: (cursor: number) => void    
    }
) => {
  return (
    <div 
        className="page__header"
    >
        {
            headers.map((header, item) => (
                <div
                    key={item}
                    className={`page__header-action ${cursor === item ? 'active' : ''}`}
                >
                    <button                        
                        onClick={() => onHandleClick(item)}
                    >
                        { header }
                    </button>
                </div>
            ))
        }    
    </div>
  )
}

export default PageHeader