import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props){
  super(props)
  this.state = {
    total: '',
    value1: '',
    value2: ''
    }
  this.numberValues = this.numberValues.bind(this);
  this.submitValues = this.submitValues.bind(this);
  }

  numberValues(e){
    this.setState({value1: parseInt(e.target.value1)});
    this.setState({value2: parseInt(e.target.value2)});
  }  

  submitValues(e){
    var value1 = this.state.value1;
    var value2 = this.state.value2;
    this.setState({total:this.state.total = value1 + value2});
  }

	render(){
       return(
		<div className="container">
  			<h1>Add with React!</h1>
  			<div className="add">
          <form>
      			<input id="num1" hidden={this.state.value1} type="number" onChange={this.numberValues} />
      			<span>+</span>
      			<input id="num2" hidden={this.state.value2} type="number" onChange={this.numberValues} />
            <input type="submit" value="Submit" onClick={this.submitValues}/>
      			<span>=</span>
            <h1>Total: {this.state.total}</h1>
          </form>
  			</div>
		</div>
    );
	}
}

export default Calculator;