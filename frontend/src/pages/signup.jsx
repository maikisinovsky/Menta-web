import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  const [name, setNombre] = useState('');
  const [surname, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefono] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      const response = await fetch('https://menta-backend.vercel.app/user/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, email, phone, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registro exitoso');
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
    <section className='background-one'>
      <form className='sign-container' onSubmit={handleSignup}>

        <h2 className='sign-title'>Registro</h2>

        <main className='form-container'> 
          <section className='container'>
            <label className='sign-label'>Nombre</label>
            <input 
              type='text' 
              className='sign-input' 
              value={name} 
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </section>

          <section className='container'>
            <label className='sign-label'>Apellido</label>
            <input 
              type='text' 
              className='sign-input' 
              value={surname} 
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </section>

          <section className='mail-phone-container'>
            <div className='container'>
              <label className='sign-label'>Mail</label>
              <input 
                type='email' 
                className='mail-input' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='container'>
              <label className='sign-label'>Teléfono</label>
              <input 
                type='tel' 
                className='phone-input' 
                value={phone} 
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </section>

          <section className='container'>
            <label className='sign-label'>Contraseña</label>
            <input 
              type='password' 
              className='sign-input' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </section>
        </main>
        
        <button className='sign-button' type='submit'>Registrarse</button>

        <p className='login-text'>¿Ya tienes cuenta? <Link to="/Login" className='link'>Inicia sesión</Link></p>

      </form>
    </section>
  )
}

export default Signup;
