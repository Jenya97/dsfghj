import React,{useContext,useEffect,useState} from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Context} from '../context';

export default function TodoItem({id,task,cheked,readonly}) {
   const {remove,checking}=useContext(Context);
   const [readOnly,setReadOnly]=useState(readonly);
   const [val,setVal]=useState(task)

  useEffect(()=>{
    let z=JSON.parse(localStorage.getItem('todos'));
    let g=z.map(i=>{
      if(id===i.id){
        return {
          ...i,
          task:val
        }
      }else{
        return {
          ...i
        }
      }
    })
   localStorage.setItem('todos',JSON.stringify(g));
  },[id,val])
  return (
    <div> 
        <input type='checkbox' checked={cheked}
         onChange={()=>checking(id)}/>
       {readOnly ?
         <input type='text' value={task}
        className={cheked ? "checked" : null} disabled/>
         :
         <input type='text' value={val}
         className={cheked ? "checked" : null} 
         onChange={(e)=>setVal(e.target.value)}
        />  }
       <BorderColorIcon onClick={()=>setReadOnly(!readonly)}></BorderColorIcon>
       <DeleteOutlineIcon onClick={()=>remove(id)}></DeleteOutlineIcon>
    </div>
  )
}
