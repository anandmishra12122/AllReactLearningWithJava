import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  return (
    <div className='maindiv' style={{ backgroundColor: color }}>

      <div class="left-menu">
        <button class="btn1" onClick={() => setColor("red")}>Red</button>
        <button class="btn2" onClick={() => setColor("cyan")}>Cyan</button>
        <button class="btn3" onClick={() => setColor("green")}>Green</button>
        <button class="btn4" onClick={() => setColor("orange")}>Orange</button>
        <button class="btn5" onClick={() => setColor("purple")}>Purple</button>
        <button class="btn6" onClick={() => setColor("blue")}>Blue</button>
        <button class="btn7" onClick={() => setColor("brown")}>Brown</button>
        <button class="btn8" onClick={() => setColor("pink")}>Pink</button>
      </div>
    </div>




  )
}

export default App
