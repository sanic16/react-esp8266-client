import React, { useState } from "react"
import { Link } from "react-router-dom"

import './register.css'

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  } 

  return (
    <section className="register">
      <div className="register__container">
        <div className="container">
          <h1>
            Registrarse
          </h1>
          <form>

            <div className="form__group">
              <label>
                Usuario
              </label>
              <input
                type="text"
                name="username"
                placeholder="Nombre de Usuario"
                value={userData.username}
                onChange={handleChange}
              />
            </div>
    
            <div className="form__group">
              <label>
                Nombre
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form__group">
              <label>
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form__group">
              <label>
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="********"
                value={userData.password}
                onChange={handleChange}
              />
            </div>


            <div className="form__group">
              <label>
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              className="btn"
            >
              Registrarse
            </button>
          </form>

          <small>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </small>
        </div>
      </div>
    </section>
  )
}

export default Register