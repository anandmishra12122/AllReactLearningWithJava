import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  let increaseValue = () => {
    if(counter < 20)
    {
      setCounter(counter+1);
    }
  };

  let resetValue = () => {
    setCounter(0);
  }

  let decreaseValue = () =>{
    if(counter > 0)
    {
      setCounter(counter-1);
    }
  }



  return (
    <>
      <div class="container">
        <h1>Counter App</h1>

        <div class="counter-box">
          <h2>{counter}</h2>

          <div class="buttons">
            <button onClick={increaseValue}>Increase</button>
            <button onClick={resetValue}>Reset</button>
            <button onClick={decreaseValue}>Decrease</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
