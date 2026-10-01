import ChildA from "./componentes/ChildA"
import './App.css'
import UserContext from "./context/UserContext"
import { useState } from "react"

function App() {

  const [user,Setuser] = useState({name:"anand"})

  return (
    <>
      <UserContext value={user}>
        <ChildA/>
      </UserContext>
    </>
  )
}

export default App;
export {UserContext};
