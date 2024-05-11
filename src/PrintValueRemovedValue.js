function App (){
    const[ data,setData]=useState(null)
    const[print , setprint]=useState(false)
    function getData(val)
    {
  console.warn(val.target.value)
  setData(val.target.value)
  //setData(false)
    }
    return(
      <div className='App'>
        {
          print?
          <h1> {data}</h1>
          :null
        }
        <input type="text" onChange={getData}></input>
        <button onClick={()=>setprint(true)}> Print data</button>
      </div>
    )
  }
    
   export default App ;