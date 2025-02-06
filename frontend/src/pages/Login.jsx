import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      const response = await fetch('https://menta-backend.vercel.app/user/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inicio de sesión exitoso');
        console.log(data);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la conexión con el servidor');
    }
  };

  return (
    <main className='background-one'>
      <form className='sign-container' onSubmit={handleLogin}>

        <h2 className='log-title'>Inicia sesión</h2>

        <main className='mail-phone-container'>
          <section className='container'>
            <label className='login-label'>Mail</label>
            <input 
              type="email" 
              className='login-input' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </section>
            
          <section className='container'>
            <label className='login-label'>Contraseña</label>
            <input 
              type="password" 
              className='login-input' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </section>
        </main>

        <section className='container'>
          <label className='login-label'>Nombre que figure en el pedido</label>
          <input 
            type="text" 
            className='name-input' 
            placeholder="Nombre..." 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        <button className='login-button' type='submit' id='loginButton'>Inicia sesión</button>

        <p className='sign-text'>¿No tienes cuenta? <Link to="/Signup" className='link'>Regístrate</Link></p>
      </form>
    </main>
  )
}

export default Login;
