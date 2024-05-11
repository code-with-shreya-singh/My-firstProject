class App extends React.Component{
    constructor()
    {
      super();
      this.state={
        data:"Anil"
      }
    }
    render()
    {
      return(
        <h1>Hello world{this.state.data}</h1>
      )
    }
  }
  export default App;