import './App.scss';
import { useState } from 'react';
import Home from './pages/home/Home';
import Memotest from './pages/game/Memotest';
import End from './pages/end/End';
import Logo from './img/logo.png'

function App() {

  const[page, setPage] = useState(1);
  const[maxTime, setTime] = useState(60);
  const[points, setPoints] = useState(0);

  function handlePage(p){setPage(p)}
  function handlePoints(s){setPoints(s)}

  return (
    <div className="App">
      {page === 0 && <Home goToNextPage={() => {handlePage(1)}} logo={Logo}/>}
      {page === 1 && <Memotest handlePage={handlePage} handlePoints={handlePoints} size={12} time={maxTime}/>}
      {page === 2 && <End goToNextPage={() => {handlePage(0)}} logo={Logo} />}
    </div>
  );
}

export default App;
