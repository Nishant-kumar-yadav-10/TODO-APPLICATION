import { useState } from 'react'
import './App.css'

function App() {
  const[add, setAdd]=useState('')


  return (
    <>
  <h1>todo</h1>
  <input type='text' placeholder='type here' ></input>
  <button>add</button>
   </>
  )
}

export default App
