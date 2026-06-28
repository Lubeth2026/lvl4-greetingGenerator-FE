
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  async function generateGreeting() {
    try {
      const response = await fetch("http://127.0.0.1:5000/greetings", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name: name })
      });
      const data = await response.json();
      setGreeting(data.message);
    } catch (error) {
      
    }
  }

  return (
    <>
      <h1>Welcome to our Project Page</h1>
      <h2>Greeting Generator</h2>
      <input type="text" placeholder="Enter your name" value={name} 
      onChange={(event)=> setName(event.target.value)} />
      <p>Your Name Is: {name}</p>
      <button onClick={generateGreeting}>Generate Greeting</button>
      <p>{greeting}</p>
    </>
  )
}

export default App
