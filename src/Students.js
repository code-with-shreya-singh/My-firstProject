import React from 'react'
class Students extends React . Component{
    render(){
        return(
            <div className='App'>
                <h1>Students components</h1>

            </div>
        )
    }
}
export default Students;




//import'./App.CSS';
//import React from 'react'
import Students from './Students';
//class App extends React.Component {
  constructor()
    {
      super();
      this.state={
        show:true
      }
    }
  
  render()
  {
    return(
      <div className='App'>
        {
          this.state.show?<Students />:<h1>Child Component Removed</h1>
        }
        <button onClick={()=>this.setState({show:this.state.show})}> Toggle child Component</button>
      
      </div>
    )
  }
//}
// export default App ;



