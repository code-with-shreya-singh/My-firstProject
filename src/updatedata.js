function App() {
    const[data , setData]=useState("Anu")
    function UpdateData()
    {
      setData("Singh")
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