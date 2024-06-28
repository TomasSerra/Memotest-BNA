import React from 'react'
import './Home.scss'

import Logo from '../../img/logo.png'
import Decoracion from '../../img/home/fichas.png'
import Gift from '../../img/home/regalo.png'

function Home({goToNextPage}) {
  return (
    <div className='home-page'>
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        <img src={Decoracion} className='decoration' />
        <h1>
          <span className='blue'>¡</span>Vamos a jugar<span className='orange'>!</span>
        </h1>
        <p>Encontrá los 6 pares de productos y llevate un premio especial.</p>
        <img src={Gift} className='gift' />
      </div>
      <div className="button">
        <button onClick={goToNextPage}>Empezá</button>
      </div>
    </div>
  )
}

export default Home