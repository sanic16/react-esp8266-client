import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
import { clear } from '../../store/slices/esp8266StateSlice'
import { useLogoutMutation } from '../../store/slices/userApiSlice'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import sidebar_menu from './sidebar-menu'
import Modal from '../modal/Modal'

import './sidebar.css'
import { toast } from 'react-toastify'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useSelector((state: {auth: AuthState}) => state.auth)
  const closeSidebar = () => setIsOpen(false)
  const dispatch = useDispatch()

  const [logoutUser] = useLogoutMutation()

  const handleLogout = async() => {
    try {
      await logoutUser().unwrap
      dispatch(logout())
      dispatch(clear())
      closeSidebar()
      toast.success('Sesión cerrada.')
    } catch (error) {
      toast.error('Error al cerrar sesión.')
    }
  }

  return (
    <>
      <nav 
        className={`sidebar ${isOpen ? 'active' : ''}`}
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
              isOpen && user && (
                <>
                  <h5>
                    { user.name.length > 20 ? user.name.slice(0, 25) + '...' : user.name}
                  </h5>
                  <button 
                    className='sidebar__logout'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
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
                      <Link 
                        to={item.path}
                        onClick={closeSidebar}
                      >
                        
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
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <></>
      </Modal>
    </>
  )
}

export default Sidebar