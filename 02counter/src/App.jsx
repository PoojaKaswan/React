import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = function() {
    console.log("Value added", counter)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h1>Counter value: {counter}</h1>

      <button onClick = {addValue}>Add value</button>
      {counter}<br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
