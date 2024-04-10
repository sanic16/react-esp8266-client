import React, { useState } from "react"
import { useRegisterMutation } from "../../store/slices/userApiSlice"
import { Link, useNavigate } from "react-router-dom"

import './register.css'
import { toast } from "react-toastify"

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  } 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await register({
        username: userData.username,
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }).unwrap()
      toast.success('Te has registrado correctamente')
      navigate('/login')
    } catch (error) {
      toast.error('Ha ocurrido un error al registrarse')
    }
  }

  return (
    <section className="register">
      <div className="register__container">
        <div className="container">
          <h1>
            Registrarse
          </h1>
          <form 
            onSubmit={handleSubmit}
          >

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
              className={`btn ${isLoading ? 'disabled' : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
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