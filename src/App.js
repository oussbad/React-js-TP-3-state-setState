import {Component} from "react";


class App extends Component{
  constructor(props){
    super(props);
    this.state={num:0};

  }
  inc=()=>{
    this.setState({num:this.state.num+1})
  }
  dec=()=>{
    this.setState({num:this.state.num-1})
  }
 render(){
  return (
     <div className="App">
      <p>{this.state.num}</p>
      <button onClick={this.inc}>incrementer</button>
      <button onClick={this.dec}>decrementer</button>


     </div>
  )
 }
}

export default App;
