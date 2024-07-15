import React, {useState} from 'react'
import './Home.scss'

import Logo from '../../img/logo.png'
import Decoracion from '../../img/home/fichas.png'
import Gift from '../../img/home/regalo.png'
import SecretButton from '../../components/SecretButton/SecretButton'
import StatsViewer from '../../components/StatsViewer/StatsViewer'

function Home({goToNextPage}) {
  const [showStats, setShowStats] = useState(false)
  return (
    <div className='home-page'>
      <div style={{position: 'absolute', top: 0, left: 0, width: '15vw', height: '15vw'}}>
        <SecretButton whenClicked={() => setShowStats(true)} totalClicks={2}/>
      </div>
      {showStats && <StatsViewer whenClose={()=>{setShowStats(false)}} storageKey={'stats-memotest-bna'}/>}
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