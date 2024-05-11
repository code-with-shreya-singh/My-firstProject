function App (){
    const[ ,setData]=useState(null)
    function getData(val)
    {
  console.warn(val.target.value)
  setData(val.target.value)
    }
    return(
      <div className='App'>
        <h1>Get Input box value :-</h1>
        <input type="text" onChange={getData}></input>
      </div>
    )
  }
    
  
   export default App ;