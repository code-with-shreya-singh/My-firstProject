import React ,{useState} from 'react';
function App() {
  const[count ,setcount]=useState(0);
  const[item ,setItem]=useState(10);
  return (
    <div className='App'>
      <h1>UseMemo Hook in React</h1>
      <h2>Count :{count}</h2>
      <h2>item :{item}</h2>
      <button onClick={()=>setcount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*10)}>Update Item</button>
      
    </div>
  );
}
export default App;