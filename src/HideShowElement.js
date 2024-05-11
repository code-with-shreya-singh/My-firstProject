import { useState } from 'react';
import React from 'react';
function App (){
  const[ Status,setStatus]= React.useState(true)

  return(
    <div className='App'>
      {
        Status? <h1>Hello world !</h1>:null
      }
     <button onClick={()=>setStatus(false)}>Hide </button>
     <button onClick={()=>setStatus(true)}>Show</button>
    </div>
  )
}
  
 export default App ;