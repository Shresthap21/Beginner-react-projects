import React, { useState } from "react";
import './App.css'; 

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('');

  function calcBmi(e) {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / ((height / 100) * (height / 100)));
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are healthy");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  }

  function reload() {
    setWeight(0);
    setHeight(0);
    setMessage('');
    setBmi('');
  }

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div className="input-group">
            <label htmlFor="weight">Weight (in kg):</label>
            <input
              type="text"
              name="weight"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="height">Height (in cm):</label>
            <input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={calcBmi}>Submit</button>
            <button type="button" onClick={reload}>Reload</button>
          </div>
          
          <div className="result">
            <h2>Your BMI is: {bmi}</h2>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
