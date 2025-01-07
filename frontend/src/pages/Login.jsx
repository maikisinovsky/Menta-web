import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'


function Login() {
  return (
    <main className='background-one'>
      <form className='sign-container'>

        <h2 className='log-title'>Inicia sesión</h2>

        <main className='mail-phone-container'>
          <section className='container'>
            <label className='login-label'>Mail/Telefono</label>
            <input type="text" className='login-input'></input>
          </section>
            
          <section className='container'>
            <label className='login-label'>Contraseña</label>
            <input type="text" className='login-input'></input>
          </section>

        </main>

        <section className='container'>
          <label className='login-label'>Nombre que figure en el pedido</label>
          <input type="text" className='name-input' placeholder="Nombre..."></input>

        </section>

        <button className='login-button' type='summit'>Inicia sesión</button>

        <p className='sign-text'>¿No tienes cuenta? <Link to="/Signup" className='link'>Registrate</Link></p>
      </form>
    </main>
    
  )
}

export default Login
