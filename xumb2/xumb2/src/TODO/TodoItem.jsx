import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function TodoItem({task,cheked}) {
  return (
    <div>
        
        <input type='checkbox' defaultChecked={cheked}/>
        <input type='text' value={task} readOnly/>
       <BorderColorIcon></BorderColorIcon>
       <DeleteOutlineIcon></DeleteOutlineIcon>
    </div>
  )
}
