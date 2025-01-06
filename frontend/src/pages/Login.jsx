import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='login-container'>

        <section className='contact-container'>

            <label className='login-label'>Mail/Telefono</label>
            <input type="text" className='login-input'></input>
        </section>
            
        <section className='password-container'>
            <label className='login-label'>Contraseña</label>
            <input type="text" className='login-input'></input>
        </section>
            
        <section className='name-container'>
            <label className='login-label'>Nombre que figure en el pedido</label>
            <input type="text" className='login-input' placeholder="Nombre..."></input>

        </section>

        <button className='login-button'>Inicia sesión</button>

        <p className='sign-text'>¿No tienes cuenta? <Link to="/Signup" className='link'>Registrate</Link></p>
    </div>
  )
}

export default Login
