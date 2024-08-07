import React from 'react'
import { useEffect, useState, useRef, useReducer } from 'react';
import './Memotest.scss'

import Logo from '../../img/logo.png'

import Back from '../../img/icono.png'
import CardTable from '../../components/card table/CardTable';
import TimeBar from '../../components/time bar/TimeBar';

import Decoration from '../../img/game/decoracion juego.png'

export default function Memotest({size, time, goToNextPage, handleGlobalPoints, images}) {
    const [imgs, setImgs] = useState([])
    const[timer, setTimer] = useState(time);
    const[points, setPoints] = useState(0);
    const[end, setEnd] = useState();
    const [order, setOrder] = useState([]);
    const intervalRef = useRef(null);

    function randomize(cant){
        let array = [];
        let randomImgs = [];
        let randomNums = [];

        while(randomImgs.length<size/2){
            const num = Math.floor(Math.random()*images.length)
            if(!randomNums.includes(num)){
                randomImgs.push(images[num])
                randomNums.push(num)
            }
        }

        setImgs(randomImgs)

        while(array.length<cant){
            const num = Math.floor(Math.random()*cant)
            if(!array.includes(num)){
                array.push(num)
            }
        }
        return(array)
    }
    
    function handlePoints(p){
        setPoints(prevPoints => prevPoints+p)
    }

    function handleTimer(){
        setTimer(prevTimer => prevTimer - time / 1000)
    }

    useEffect(()=>{
        setOrder(randomize(size))
        preloadImages(imgs);

        intervalRef.current = setInterval(() => {
            handleTimer();
          }, time);

        return () => {
            clearInterval(intervalRef.current);
          };
    }, [size, time])

    useEffect(()=>{
        if(points === size || timer <= 0){
            clearInterval(intervalRef.current);
            setEnd(true);
            setTimeout(()=>{
                handleGlobalPoints(points);
                goToNextPage();
            }, 2000)
        }
    }, [points, timer])

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
                        size={window.innerWidth <= 800 ? 75 : 75} 
                        space={4} 
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
