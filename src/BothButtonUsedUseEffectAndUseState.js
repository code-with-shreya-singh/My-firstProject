import React , {useEffect ,useState} from 'react';
function App (){
  const[data ,setData]=useState(10);
  const[count ,setcount]=useState(100);
  useEffect(()=>{
           alert("useEffect" +data)
  }, [data] )

  useEffect(()=>{
    alert("useEffect" +count)
}, [count] )

  return(
    <div className='App'>
    <h1>Data :{data} </h1>
    <h1>count :{count}</h1>
    <button onClick={()=>setData(data+1)}>Update data</button>
    <button onClick={()=>setcount(count+1)}>Update count</button>
    </div>
  );
}

 export default App ;