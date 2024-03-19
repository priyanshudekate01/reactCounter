import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

// let counter =4;
const addValue= ()=>{
  // console.log("clicked", Math.random());
  if(counter>=20){
    counter=20
  }
  else{
    counter = counter+1
  }
  // counter = counter+1
  setCounter(counter)
}

const removeValue =()=>{

  if(counter<=0){
    counter =0
  }
  else{
    counter= counter-1 
  }

  // counter= counter-1 
  
  setCounter(counter)
}
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue} 
      >Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App
