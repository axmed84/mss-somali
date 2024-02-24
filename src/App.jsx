import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import { Timer } from './Components/timer/Timer'
import Competitors from './Components/competitors/Competitors'
import VoteModal from './Components/Modal/VoteModal'



function App() {
  

  return (
    <>
    <Header/>
    <Timer />
    <Competitors />
    <VoteModal />
    </>
  )
}

export default App
