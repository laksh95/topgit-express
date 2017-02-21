import React from 'react';
class Operations extends React.Component {
	constructor(props) {
		super(props);
		console.log(props,"constructor");
		this.props=props;
		this.state={
			numOne:'',
			numTwo:''
		};
		this.handleChange1=this.handleChange1.bind(this);
		this.handleChange2=this.handleChange2.bind(this);
		this.addNumbers=this.addNumbers.bind(this);
		this.subNumbers=this.subNumbers.bind(this);
		this.multiplyNumbers=this.multiplyNumbers.bind(this);
		this.divideNumbers=this.divideNumbers.bind(this);
	}

	addNumbers(){
		this.props.getResults(Number(Number(this.state.numOne)+Number(this.state.numTwo)));
	}
	subNumbers(){
		this.props.getResults(Number(Number(this.state.numOne)-Number(this.state.numTwo)));
	}
	multiplyNumbers(){
		this.props.getResults(Number(Number(this.state.numOne)*Number(this.state.numTwo)));
	}
	divideNumbers(){
		this.props.getResults(Number(Number(this.state.numOne)/Number(this.state.numTwo)));

	}
	handleChange1(event){
		this.setState({
			numOne:event.target.value
		});
	}
	handleChange2(event){
		this.setState({
			numTwo:event.target.value
		});
	}

	render(){
		return(
			<div>
				<input type="text" placeholder="Enter Value" value={this.state.numOne} onChange={this.handleChange1}></input>
         		<br/>
         		<input type="text" placeholder="Enter Value" value={this.state.numTwo} onChange={this.handleChange2}></input>
         		<br/>
				<button onClick={this.addNumbers}>add</button>
				<button onClick={this.subNumbers}>sub</button>
				<button onClick={this.multiplyNumbers}>mul</button>
				<button onClick={this.divideNumbers}>div</button>
				<label id="err"></label>
			</div>
		)
	}
}
export default Operations;