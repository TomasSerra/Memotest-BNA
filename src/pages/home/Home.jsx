import React, {useState} from 'react'
import './Home.scss'

function Home({goToNextPage, logo}) {

  return (
    <div className='home-page'>
        <div className="top-section">
        	<img src={logo} />
        </div>
        <div className="title-section">
			<h1>¡Bienvenido!</h1>
			<h2>Demostrá cuanto conoces de educación financiera</h2>
        </div>
        <div className="button-section">
            <button onClick={goToNextPage}>Jugar <span>&#8594;</span></button>
        </div>
    </div>
  )
}

export default Home