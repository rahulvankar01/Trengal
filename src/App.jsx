import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Slider from './component/Slider'
import Work from './component/Work'
import Work1 from './component/Work1'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Slider></Slider>
      <Work></Work>
      <Work1></Work1>
      <Footer></Footer>
    </>
  )
}

export default App
