import React, {Component} from 'react';
class header extends Component {


   state = {firstName: '',};
 

  handleChange=(e)=> {
    this.setState({ firstName:e.target.value});
  }
  render(){
  return (
  <div>
    <h1>{this.state.firstName}</h1>
    <input name="firstName" onChange={this.handleChange} />
  </div>
  );
}
}

export default header;