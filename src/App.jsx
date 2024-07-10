import { useState } from 'react'
import './App.css'

function App() {
  const[joke,setjoke]=useState("You'll get a joke here once you click on the up button")
  function generate(){
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res)=>res.json())
    .then((data)=>setjoke(data.joke));
  }

  return(

    <div id="container">
      <h1>Joke Generator Using React and Joke API</h1>
      <button onClick={generate}>Click to generate a joke.</button>
      <h2>"{joke}"</h2>
    </div>
  )
}

export default App
