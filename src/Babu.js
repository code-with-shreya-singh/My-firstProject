import React ,{ useState} from 'react';
function App() {
  const[data , setData]=useState("Anu")
  return(
 <div className='App'>
      <h1>UseMemo Hook in React</h1>
      <h2>Data :{data}</h2>
      <button onClick={()=>setData("Singh")}>Update Data</button>
      
    </div>
  );
}
export default App;
  

 