import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  return (
    <div className='sign-container'>

      <section className='nombre-completo-container'>
        <label className='sign-label'>Nombre y apellido</label>
        <input type='text' className='sign-input'></input>
      </section>

      <section className='mail-container'>
        <label className='sign-label'>Mail</label>
        <input type='text' className='sign-input'></input>
      </section>

      <section className='dni-phone-container'>

        <div className='dni-container'>
          <label className='sign-label'>DNI</label>
          <input type='text' className='sign-input'></input>
        </div>

        <div className='phone-container'>
          <label className='sign-label'>Teléfono</label>
          <input type='text' className='sign-input'></input>
        </div>
      </section>

      <section className='password-container'>
          <label className='sign-label'>Contraseña</label>
          <input type='text' className='sign-input'></input>
      </section>

      <button></button>
        <p className='login-text'>¿Ya tienes cuenta? <Link to="/Login" className='link'>Registrate</Link></p>
    </div>
  )
}

export default Signup
