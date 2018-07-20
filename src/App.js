import React, { Component } from 'react';

import './App.css';

class App extends Component {

constructor(props)
{
  super(props);
  this.state={count:0,flag:"true"};
  this.handle=this.handle.bind(this);
  this.validate=this.validate.bind(this);
}

handle()
{
  this.setState({count:this.state.count +1}/*,function() {
    this.validate();}*/);

  //setState is asynchronous. Therefore this.validate() is called before setState returns.
  //hence validate function sees older value of count i.e, before execution of setState.
  // To make validate() run only after state changes, pass it as a callback in setState.
   this.validate();  /*state changes but is not reflected immediately. Therefore flag value is not changed immediately after count reaches 8*/
  // including callback in setState allows state changes in a variable reflected as soon as they occur.   

}

validate()
{  if(this.state.count>8)
  {
    this.setState({flag:"false"});
  }

}


  render() {
    return (
     <div>
    Count: {this.state.count}  Flag:{this.state.flag}    <button onClick={this.handle}>ClickMe!!</button>
     </div>
    );
  }
}

export default App;
