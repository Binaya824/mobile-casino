import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lobby from './components/Game Lobby/Lobby'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lobby/>
      <Menu/>
      <Navbar/>
    </>
  )
}

export default App
