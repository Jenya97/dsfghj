import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import UseEffectComp from './UseEffectComp';

function App() {
  // const [display,setDisplay]=useState('none')
  const [display1,setDisplay1]=useState(false)
  return (
    <div className="App">
      {/* <button onClick={
        ()=>display==='none' ? setDisplay('block') : setDisplay('none')}>
        hide</button>
     <p style={{display:display}}>barev</p> */}
     {/* <button onClick={()=>setDisplay1(!display1)}></button> */}
     {/* <h2 style={{display:display1 ? 'block' : 'none'}} */}
     {/* <h2
     className={display1 ? 'text' : null }
     >barevvik</h2>*/}
     {/* <button onClick={()=>setDisplay1(!display1)}>user</button>
     {display1 ? <h1>barev hargeli hajaxord</h1> : <h1>gnaceq grancveq</h1>} */}
     {
       display1 && <h2>kjkjkj</h2>
     }
     <UseEffectComp/>
     </div> 
  );
}

export default App;
