import { useBlockContext } from '../../hooks/useContext'
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
  const { isBlock } = useBlockContext()   
  return (
    <div 
        className="page__header"
    >
        {
            headers.map((header, item) => (
                <div
                    key={item}
                    className={`page__header-action ${cursor === item ? 'active' : ''} ${isBlock ? 'disabled' : ''}`}
                >
                    <button                        
                        onClick={() => onHandleClick(item)}
                        disabled={isBlock}
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