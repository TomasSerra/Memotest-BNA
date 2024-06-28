import './App.scss';
import { useState } from 'react';
import Home from './pages/home/Home';
import Memotest from './pages/game/Memotest';
import End from './pages/end/End';

function App() {

  const[page, setPage] = useState(2);
  const[time, setTime] = useState(6000);
  const[points, setPoints] = useState(0);
  const size = 12;



  function handlePage(p){setPage(p)}
  function handlePoints(s){setPoints(s)}

  return (
    <div className="App">
      {page === 0 && <Home goToNextPage={()=>{handlePage(1)}} />}
      {page === 1 && <Memotest goToNextPage={()=>{handlePage(2)}} handlePoints={handlePoints} size={size} time={time} />}
      {page === 2 && <End goToNextPage={()=>{handlePage(0)}} hasWin={points===size} />}
    </div>
  );
}

export default App;
