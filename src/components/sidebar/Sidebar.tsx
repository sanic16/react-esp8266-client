import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
import { clear } from '../../store/slices/esp8266StateSlice'
import { useLogoutMutation } from '../../store/slices/userApiSlice'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
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
  const location = useLocation()
  const navigate = useNavigate()

  const [logoutUser] = useLogoutMutation()

  const handleLogout = async() => {
    try {
      await logoutUser().unwrap
      dispatch(logout())
      dispatch(clear())
      closeSidebar()
      toast.success('Sesión cerrada.')
      navigate('/')
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
              isOpen && (
                <>
                  <p>
                    { user && (user.name.length > 20 ? user.name.slice(0, 25) + '...' : user.name)} 
                  </p>
                 {
                    user && (
                      <button 
                        className='sidebar__logout'
                        onClick={handleLogout}
                      >
                        Cerrar sesión
                      </button>
                    )            
                 }
                 {
                  (location.pathname !== '/login' && !user) && (
                    <Link
                      to='/login'
                      className='sidebar__login'
                      onClick={closeSidebar}
                    >
                      Iniciar sesión
                    </Link>
                  )
                 }
                  {
                    
                  }                  
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
                      {
                        (item.path !== '/' && user || !user) && (
                          <NavLink 
                            to={item.path}
                            onClick={closeSidebar}
                            className={({isActive}) => `${isActive && 'active'}`}
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
                            
                          </NavLink>
                        ) 
                      }
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