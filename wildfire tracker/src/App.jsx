import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'; 

import  Maps from './Components/Maps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Maps />
      </div>
     
    </>
  )
}

export default App
