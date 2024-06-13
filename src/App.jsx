import './App.scss';
import { useState } from 'react';
import Home from './pages/home/Home';
import Memotest from './pages/game/Memotest';
import End from './pages/end/End';

function App() {

  const[page, setPage] = useState(1);
  const[time, setTime] = useState(60);
  const[points, setPoints] = useState(0);



  function handlePage(p){setPage(p)}
  function handleTime(t){setTime(t)}
  function handlePoints(s){setPoints(s)}

  return (
    <div className="App">
      {page === 0 && <Home handlePage={handlePage} handleTime={handleTime} />}
      {page === 1 && <Memotest handlePage={handlePage} handlePoints={handlePoints} size={12} time={time} />}
      {page === 2 && <End handlePage={handlePage} points={points} />}
    </div>
  );
}

export default App;
