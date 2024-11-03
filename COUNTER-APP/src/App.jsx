import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleMinus() {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="container">
      <p className="counter">{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={handleMinus} disabled={counter === 0}>-</button>
    </div>
  );
}

export default App;
