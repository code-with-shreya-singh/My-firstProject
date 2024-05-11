
import { useState } from 'react';
//import Student from './Student';
import React from 'react';
//import user from './User';
function App (){
  const[name , setname]= useState(" ")
  const[tnc , setTnc]=useState(false)
  const[interest , setInterest]=useState(" ")
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
    e.preventDefault()

  }
  return(
    <div className='App'>
      <h1>Handle form in React</h1>
      <form onSubmit={getFormData}>

        <input type="text" placeholder='enter the full name' value={name} onChange={(e)=>setname(e.target.value)}></input>
        <select onChange={(e)=>setInterest(e.target.value)}></select><br></br>
        <select>
          <option>Select options</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Dewas</option>
          <option>Vijay Nagar</option>
          <option>Bombay Hospital</option>
          <option>Nipaniya</option>
          <option>Industry House</option>
        </select><br></br>
        <input type="checkbox" onChange={(e)=>setInterest(e.target.checked)}/>
         <span>Aceept terms and condition</span><br></br>
         <button type='submit'>Submit</button>
         <button>Clear</button>
      </form>

     
    </div>
  );
}
  
 export default App ;