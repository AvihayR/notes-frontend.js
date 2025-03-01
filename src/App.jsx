import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../cmps/header'
import BigNote from '../cmps/BigNote'
import Footer from '../cmps/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BigNote />
      <Footer />
    </>
  )
}

export default App
