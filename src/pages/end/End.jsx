import React, { useEffect } from 'react'
import './End.scss'
import Confetti from 'react-confetti'
import {useWindowSize} from '@react-hook/window-size'

import Logo from '../../img/logo.png'
import Trofeo from '../../img/end/trofeo.png'
import Reloj from '../../img/end/reloj.png'

function End({goToNextPage, hasWin}) {
  const [width, height] = useWindowSize()

  useEffect(() => {
    setDataToLocalStorage()
    setTimeout(() => {
      goToNextPage()
    }, 6000)
  }, [])

    //El JSON de estadisticas se guarda en el localStorage con la siguiente estructura:
// {
//     "dia": cantidadDeVecesJugadas,
//     "dia": cantidadDeVecesJugadas,
//     ...
// }

  const setDataToLocalStorage = () => {
    const jsonData = localStorage.getItem('stats-memotest-bna');
    let estadisticas = {}
    if (jsonData) {
      estadisticas = JSON.parse(jsonData);
    }
    const date = new Date()
    const dia = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    if(estadisticas[dia]){
      estadisticas[dia] += 1
    } else {
      estadisticas[dia] = 1
    }
    localStorage.setItem('stats-memotest-bna', JSON.stringify(estadisticas));
  }

  return (
    <div className='end-page'>
      {hasWin && <Confetti
        width={width}
        height={height}
        colors={['#8F8ABD', '#F06C29', '#007B5F', '#507385', '#D4AC87', '#65C9D8']}
        recycle={true}
        numberOfPieces={500}
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
        <>
          <h2>
            <span className='blue'>¡</span>Se te acabó el tiempo<span className='orange'>!</span>
          </h2>
          <img src={Reloj}/>
          <p>Podes volver a participar.</p>
          <p><b>Tu premio te espera.</b></p>
        </>
      }
      </div>
    </div>
  )
}

export default End