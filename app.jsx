import React from 'react';
import Home from './components/home.jsx'
import Header from './components/header.jsx'
class App extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			cartMember:[]
		}
		this.props=props;
		this.updateCart=this.updateCart.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.props=nextProps
	}
	updateCart(cart){
		/*var tmp=this.state.cartMember;
		tmp.push(cart)*/
		this.setState({
			cartMember:cart
		})
	}
	render(){
		var tmp=this.state.cartMember
		return(
			<div>
				<Header cart={tmp}/>
				<Home updateCart={this.updateCart}/>
			</div>
		);
	}
}
export default App