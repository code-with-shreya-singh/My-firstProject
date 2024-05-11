import React , {useEffect ,useState} from 'react';
function App (){
  const[data ,setData]=useState(0)
  useEffect(()=>{
           console.warn("useEffect")
  })
  return(
    <div className='App'>
    <h1>useEffect in React {data}</h1>
    <button onClick={()=>setData(data+1)}>Update data</button>
    </div>
  );
}

 export default App ;
 