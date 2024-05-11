import React from 'react';
//import user from './User';
function App (){
  const[ Status,setStatus]= React.useState(true)
  return(
    <div className='App'>
      {
        Status?<h1>Toggles</h1>:null
      } 
      <buttom onClick={()=>setStatus(!Status)}>Toggles</buttom>
     
    </div>
  )
}
  
 export default App ;