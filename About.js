import React, { Component } from 'react';
export default  class About extends Component {
 constructor(props) {
    super(props);
    this.state = {val1: '',val2:''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key,event) {
    console.log(key,event);
    let t= {};
    t[key] = event.target.value;
    this.setState(t);
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state);
   console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <Main>
      <form onSubmit={this.handleSubmit.bind(this)}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    value={this.state.val1}   onChange={this.handleChange.bind(this,'val1')} />
    <small id="emailHelp" className="form-text text-muted">enter Value => {this.state.val1}</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={this.state.val2}   onChange={this.handleChange.bind(this,'val2')}
     placeholder="Password" />
     <small> enter Value => {this.state.val2} </small>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</Main>      
    );
  }
}

class Main extends Component{
  render(){
    return (
      <div className="container-fluid bg-light">
          {this.props.children}
     </div>
    )
  }

}