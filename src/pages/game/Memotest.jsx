import React from 'react'
import { useEffect, useState } from 'react';
import './Memotest.scss'

import F1 from '../../img/fichas/1.PNG'
import F2 from '../../img/fichas/2.PNG'
import F3 from '../../img/fichas/3.PNG'
import F4 from '../../img/fichas/4.PNG'
import F5 from '../../img/fichas/5.jpg'
import F6 from '../../img/fichas/6.jpg'

import Logo from '../../img/logo.png'

import Back from '../../img/icono.png'
import CardTable from '../../components/card table/CardTable';
import TimeBar from '../../components/time bar/TimeBar';

import Decoration from '../../img/game/decoracion juego.png'

export default function Memotest({size, time, goToNextPage, handleGlobalPoints}) {
    const [imgs, setImgs] = useState([F1, F2, F3, F4, F5, F6])
    const[timer, setTimer] = useState(time);
    const[points, setPoints] = useState(0);
    const[end, setEnd] = useState();
    const [order, setOrder] = useState([]);

    function randomize(cant){
        let array = [];
        while(array.length<cant){
            const num = Math.floor(Math.random()*cant)
            if(!array.includes(num)){
                array.push(num)
            }
        }
        console.log(array)
        return(array)
      }
    
    const ratio = window.innerWidth/window.innerHeight

    function handleTimer(){
        setTimer(prevTimer => prevTimer-time/1000)
    }

    function handlePoints(p){
        setPoints(prevPoints => prevPoints+p)
    }

    useEffect(()=>{
        setOrder(randomize(size))
        setInterval(handleTimer, time);
        preloadImages(imgs);
    }, [])

    useEffect(()=>{
        if(points === size || timer <= 0){
            clearInterval(1);
            clearInterval(2);
            setEnd(true);
            setTimeout(()=>{
                handleGlobalPoints(points);
                goToNextPage();
            }, 2000)
        }
    }, [timer])

      function preloadImages(imageArray) {
        imageArray.forEach(imageSrc => {
          const img = new Image();
          img.src = imageSrc;
        });
    }
    
    return (
        <div className='memotest-page'>
            <div className="header">
                <img src={Logo}/>
                <div className="timer">
                    <TimeBar maxTime={time} actualTime={timer} colors={{barColor: '#009EC9', backgroundColor: '#04405B'}}/>
                </div>
            </div>
            {order.length !== 0 &&
            <div className="table-container">
                <CardTable
                    size={window.innerWidth <= 800 ? 75 : 85} 
                    space={2} 
                    columns={3} rows={4}
                    order={order}
                    imgs={imgs}
                    back={Back}
                    handlePoints={handlePoints}
                    end={end}
                    backImg={Back}
                />
            </div>
            }
            <div className="decoration">
                <img src={Decoration}/>
            </div>
        </div>
    )
}
