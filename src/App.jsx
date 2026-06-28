
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");

  function generateGreeting() {
    console.log(name)
  }

  return (
    <>
      <h1>Welcome to our Project Page</h1>
      <h2>Greeting Generator</h2>
      <input type="text" placeholder="Enter your name" value={name} 
      onChange={(event)=> setName(event.target.value)} />
      <p>Your Name Is: {name}</p>
      <button onClick={generateGreeting}>Generate Greeting</button>
    </>
  )
}

export default App
