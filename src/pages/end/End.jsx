import React, { useEffect } from 'react'
import './End.scss'
import Confetti from 'react-confetti'
import {useWindowSize} from '@react-hook/window-size'

import Logo from '../../img/logo.png'
import Trofeo from '../../img/end/trofeo.png'

function End({goToNextPage, hasWin}) {
  const [width, height] = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      goToNextPage()
    }, 5000)
  }, [])

  return (
    <div className='end-page'>
      {hasWin && <Confetti
        width={width}
        height={height}
    	/>}
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        {hasWin ?
        <>
          <h1>
            <span className='blue'>¡</span>Ganaste<span className='orange'>!</span>
          </h1>
          <img src={Trofeo}/>
          <p>Encontraste todos los pares de productos.</p>
          <p><b>Disfrutá de tu premio</b></p>
        </>
        :
        <h2>Seguí participando</h2>
      }
      </div>
    </div>
  )
}

export default End