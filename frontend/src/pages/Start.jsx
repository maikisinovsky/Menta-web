import React from 'react'
import '../styles/Start.css'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div className='background-one'>
        <main className='logo-start'>

            <div className='space'></div> 

            <section className='section-button-start'>
                <Link to={"/signup"} className='link-no-decoration'>
                    <button className='button-start'>Crea un pedido 
                        <div className='order-img'></div>
                    </button>
                </Link>
                    
            </section>

        </main>
    </div>
  )
}

export default Start
