import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  return (
    <main className='background-one'>
      <div className='sign-container'>

      <h2 className='sign-title'>Registro</h2>
      <section>
        <section className='container'>
        <label className='sign-label'>Nombre y apellido</label>
        <input type='text' className='sign-input'></input>
      </section>

      <section className='container'>
        <label className='sign-label'>Mail</label>
        <input type='text' className='sign-input'></input>
      </section>

      <section className='dni-phone-container'>

        <div className='container'>
          <label className='sign-label'>DNI</label>
          <input type='text' className='sign-input'></input>
        </div>

        <div className='container'>
          <label className='sign-label'>Teléfono</label>
          <input type='text' className='sign-input'></input>
        </div>
      </section>

      <section className='container'>
        <label className='sign-label'>Contraseña</label>
        <input type='text' className='sign-input'></input>
      </section>

      </section>
      
      <button>Registrarse</button>

      <p className='login-text'>¿Ya tienes cuenta? <Link to="/Login" className='link'>Registrate</Link></p>

      </div>
    </main>
    
  )
}

export default Signup
