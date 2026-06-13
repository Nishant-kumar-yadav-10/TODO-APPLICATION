import { useState } from 'react'
import './App.css'

function App() {
  const[task,setTask]=useState('')
  const[todos,setTodos]=useState([])

  function addTodo(){
    if(task.trim()===""){
      return
    }
    setTodos([...todos,task])
    setTask("")

  }
  function deleteTask(index){
const updatedTodos=todos.filter((_,i)=>i!=index);
setTodos(updatedTodos)
  }


  return (
    <>
  <h1>todo</h1>
  <input type='text' placeholder='type here'onChange={(e)=>setTask(e.target.value)} value={task}></input>
  <button onClick={addTodo}>add</button>
  <ul>
    {todos.map((todo,index)=>(
      <li key={index}>{todo}<button onClick={()=>deleteTask(index)}>delete</button></li>
  
    ))

  }
  </ul>

   </>
  )
}

export default App
