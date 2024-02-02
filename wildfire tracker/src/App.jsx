import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  maps from './Components/maps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <map />
      </div>
     
    </>
  )
}

export default App
