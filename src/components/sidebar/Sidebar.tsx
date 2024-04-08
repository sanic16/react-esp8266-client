import { FaBars, FaTimes } from 'react-icons/fa'
import './sidebar.css'
import sidebar_menu from './sidebar-menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav 
      className={`sidebar ${isOpen ? 'active' : undefined}`}
    >
      <div className={`sidebar__container `}>
        <div 
          className='sidebar__header'
        >
          <div
            className='sidebar__toggle-wrapper'
          >
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className='sidebar__toggle'
            >
              {isOpen ? <span className='sidebar__toggle-close'><FaTimes /></span> : <FaBars />}
            </button>
          </div>
          <div
            className='sidebar__user'
          >
            {
            isOpen && (
              <h5>
                Julio Rubén Sanic Martínez
              </h5>
            )
          }
          </div>
        </div>
        <div className='sidebar__body'>
          <div
            className='sidebar__menu'
          >
            {
              sidebar_menu.map(item => (
                <div 
                  key={item.label}
                  className='sidebar__menu-item'
                >                               
                    <Link to={item.path}>
                      
                      <span>
                        {<item.icon/>}
                      </span>
                        
                    
                      {
                        isOpen && (
                          <span
                            className='open'
                          >
                            {item.label}
                          </span>
                        )
                      }
                      
                    </Link>
                </div>
              ))
            }
          </div>
          <div className='sidebar__logo'>            
          </div>  
        </div>

        
      </div>
    </nav>
  )
}

export default Sidebar