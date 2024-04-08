import { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <section className="login">
      <div className="login__container">
        <div className="container">
          <h1>
            Iniciar sesión
          </h1>
          <form>
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
              Iniciar sesión
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