import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
