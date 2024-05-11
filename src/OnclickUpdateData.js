function App() {
    const[data , setData]=useState(0)
    function UpdateData()
    {
      setData(data+1)
    }
    console.log("________________________________")
    return (
      <div  className="App">
        <h1>{data}</h1>
        <button onClick={UpdateData}>Update Data</button>
         
   </div> 
   );
   }
  
   export default App;