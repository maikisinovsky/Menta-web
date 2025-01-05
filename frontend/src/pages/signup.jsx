import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  return (
    <div className='sign-container'>

        <hgroup className='contact-container'>
            <label className='sign-label'>Mail/Telefono</label>
            <input type="text" className='sign-input'></input>
        </hgroup>
            
        <hgroup className='password-container'>
            <label className='sign-label'>Contraseña</label>
            <input type="text" className='sign-input'></input>
        </hgroup>
            
        <hgroup className='name-container'>
            <label className='sign-label'>Nombre que figure en el pedido</label>
            <input type="text" className='name-input' placeholder="Nombre..."></input>

        </hgroup>

        <button className='sign-button'>Inicia sesión</button>

        <p className='login-text'>¿No tienes cuenta? <Link to="/Login">Registrate</Link></p>
    </div>
  )
}

export default Signup
