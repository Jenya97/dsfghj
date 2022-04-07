import './App.css';
import {useState} from 'react'
import Todo from './TODO/Todo';
function App() {
  const [value,setValue]=useState('')
  const [todo,setTodo]=useState([])
  function add(){
    let z={
    id:new Date(),
    task:value,
    cheked:false
    }
    setTodo([...todo,z])
  }
  
  return (
  
   <>
   <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
   <button onClick={add}>Add</button>
   <Todo todo={todo}/>
   </>
  );
}

export default App;
