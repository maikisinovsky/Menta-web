import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  return (
    <div className='sign-container'>

        <p className='login-text'>¿No tienes cuenta? <Link to="/Login">Registrate</Link></p>
    </div>
  )
}

export default Signup
