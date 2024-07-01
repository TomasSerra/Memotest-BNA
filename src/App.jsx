import './App.scss';
import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Memotest from './pages/game/Memotest';
import End from './pages/end/End';
import Logo from './img/logo.png'

function App() {

  const[page, setPage] = useState(0);
  const[time, setTime] = useState(60);

  const[points, setPoints] = useState(0);
  const size = 12;

  function handlePage(p){setPage(p)}
  function handlePoints(s){setPoints(s)}

  useEffect(() => {
    console.log(points)
  }, [points])

  return (
    <div className="App">
      {page === 0 && <Home goToNextPage={()=>{handlePage(1)}} />}
      {page === 1 && <Memotest goToNextPage={()=>{handlePage(2)}} handleGlobalPoints={handlePoints} size={size} time={time} imgs/>}
      {page === 2 && <End goToNextPage={()=>{handlePage(0)}} hasWin={points===size} />}
    </div>
  );
}

export default App;
