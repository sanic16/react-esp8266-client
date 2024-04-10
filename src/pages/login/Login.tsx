import { useState } from 'react'
import { useLoginMutation } from '../../store/slices/userApiSlice'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await login(userData).unwrap()
      toast.success('Has iniciado sesión')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Error al iniciar sesión')
    }
  }

  return (
    <section className="login">
      <div className="login__container">
        <div className="container">
          <h1>
            Iniciar sesión
          </h1>
          <form onSubmit={handleSubmit}>
            <div
              className='form__group'
            >
                <label>
                  Correo electrónico
                </label>
                <input
                type='email'
                name='email'
                placeholder='email@email.com'            
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div
              className='form__group'
            >
                <label>
                  Contraseña
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='********'
                  value={userData.password}
                  onChange={handleChange}
                />
            </div>  
               
            <button
              className='btn'
            >
              { isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>
          <small>
            ¿No tienes una cuenta? <Link to='/register'>Regístrate</Link>
          </small>
        </div>
      </div>
    </section>
  )
}

export default Login