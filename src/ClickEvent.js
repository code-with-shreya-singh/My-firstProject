function Orange()
    function Apple()
    {
      alert(" Orange is called click Event");
    }
    return (
      <div  className="App">
        <h1> This is React world!</h1>
        <button onClick={Apple()}>Click Me</button>
        <button onclick={Apple}>Click Event</button>
   </div> 
   );
   
   export default Orange;