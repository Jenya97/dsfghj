import React from 'react'
import TodoItem from './TodoItem';

export default function Todo({todo}) {
    
  return (
    <div>
        {todo.map(i=>(
          <TodoItem key={i.id} task={i.task} cheked={i.cheked}/>
        ))}
       
    </div>
  )
}
