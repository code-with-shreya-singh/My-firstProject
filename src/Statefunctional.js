import { useState } from 'react';
function App() {
  const[data , setData]=useState("Anu")
  return (
    <div  className="App">
      <h1>{data}</h1>
      <button>Update Data</button>
       
 </div> 
 );
 }

 export default App;
