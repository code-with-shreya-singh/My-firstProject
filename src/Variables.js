function App() {
    let data="Anu Kumari"
    function Apple()
    {
    data="Singh"
    alert(data);
    }
    return (
      <div  className="App">
        <h1> This is React world!</h1>
        <h1>{data}</h1>
        <button onClick={Apple}>Click me</button>
   </div> 
   );
   }
  
   export default App;