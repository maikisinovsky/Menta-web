import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  return (
    <section className='background-one'>
      <form className='sign-container'>

      <h2 className='sign-title'>Registro</h2>

      <main className='form-container'> 
        <section className='container'>
        <label className='sign-label'>Nombre</label>
        <input type='text' className='sign-input'></input>
      </section>

      <section className='container'>
        <label className='sign-label'>Apellido</label>
        <input type='text' className='sign-input'></input>
      </section>

      <section className='mail-phone-container'>

        <div className='container'>
          <label className='sign-label'>Mail</label>
          <input type='text' className='mail-input'></input>
        </div>

        <div className='container'>
          <label className='sign-label'>Teléfono</label>
          <input type='text' className='phone-input' ></input>
        </div>

      </section>

      <section className='container'>
        <label className='sign-label'>Contraseña</label>
        <input type='password' className='sign-input'></input>
      </section>

      </main>
      
      <button className='sign-button' type='summit'>Registrarse</button>

      <p className='login-text'>¿Ya tienes cuenta? <Link to="/Login" className='link'>Inicia sesión</Link></p>

      </form>
    </section>
    
  )
}

export default Signup
