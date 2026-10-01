
import './App.css'
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import router from './Componentes/Router';
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
