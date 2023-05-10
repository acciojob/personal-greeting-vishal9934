
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  const [name,setName]=useState("");
  

  return (

    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <br />
        <br />
        <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
      
        <div>{name?`Hello ${name}!`:""}</div>
    </div>
  )
}

export default App
