import React, { useState } from 'react'
import './index.css'

const App = () => {


   const [time,setTime]=useState(new Date().toLocaleTimeString());
   const Timeset=()=>{
    return(
      setTime(new Date().toLocaleTimeString())
    )
    
   }

  return (
    <>
      <div>
        <h1>{time}</h1>
        <button onClick={Timeset}>Get Current Time!</button>
      </div>
    </>
  )
}

export default App