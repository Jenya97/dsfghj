import React,{useEffect,useState} from 'react';


export default function UseEffectComp() {
  const [counter,setCounter]=useState(0);
  const [color,setColor]=useState('blue')
//   useEffect(()=>{
//     console.log('barev');
//   },[])
//   useEffect(()=>{
//     console.log('barev');
//   });
// useEffect(()=>{
//     console.log('barev');
//   },[counter])
useEffect(()=>{
    fetch('https://reqres.in/api/users?page=2')
    .then(response=>response.json())
    .then(i=>console.log(i))
},[])
  return (
    <div>
        <h2 style={{color:color}}>{counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>add</button>
        <button onClick={()=>{
            color==='blue' ? setColor('green') : setColor('blue')
        }}>change color</button>
    </div>
  )
}
