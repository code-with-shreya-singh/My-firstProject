//class  App extends Component {
    constructor()
    {
      super();
      this.state={
        data:"anu"
      }
    }
      render()
      {
        return(
        
          <div className="App">
            <h1>{this.state.data}</h1>
            <button >UpdateData</button>
             </div> 
        );
      }
  //   }
  
   //export default App ;


   import React , {Component} from 'react';
class  App extends Component {
  constructor()
  {
    super();
    this.state={
      data:20
    }
  }
  Apple ()
  {
    this.setState({data:this.state.data+1})
  }
    render()
    {
      return(
      
        <div className="App">
          <h1>{this.state.data}</h1>
          <button >UpdateData</button>
           </div> 
      );
    }
//   }

 //export default App;



 //class  App extends Component {
    constructor()
    {
      super();
      this.state={
        data:20
      }
    }
    Apple ()
    {
      this.setState({data:"Singh"})
    }
      render()
      {
        return(
        
          <div className="App">
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.Apple()} >UpdateData</button>
             </div> 
        );
      }
     }
  
  // export default App ;