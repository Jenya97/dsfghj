import './App.css';
import {useState,useEffect} from 'react';
import {Context} from './context'
import Todo from './TODO/Todo';
function App() {
  const [value,setValue]=useState('')
  const [todo,setTodo]=useState(JSON.parse(localStorage.getItem('todos')))


  function add(){
    let z={
    id:new Date().getMilliseconds(),
    task:value,
    cheked:false,
    readonly:true,
    }
    setTodo([...todo,z])

  }

  if(!localStorage.hasOwnProperty('todos')){
    localStorage.setItem('todos',JSON.stringify(todo))
  }
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todo))
  },[todo])
 function remove(i){
  setTodo([...todo.filter(todo=>todo.id!==i)])
 };

 function checking(id){
setTodo([...todo.map((i)=>i.id===id ? {...i,cheked:!i.cheked} : {...i})])
 }
  return (
  
   <Context.Provider value={{remove,checking}}>
   <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
   <button onClick={add}>Add</button>
   <Todo todo={todo}/>
   </Context.Provider>
  
  );
}

export default App;
