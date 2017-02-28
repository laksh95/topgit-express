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
	updateCart(data){/*updating the cart item here so that when the menu group changes cart items remain intact*/
		var cart = this.state.cartMember ;
		var price= data.food_item_price;
		var count = 0
		const ZERO=0 
		for(let index in cart){
			if(cart[index].itemID===data.food_item_id){
				count =1 
				cart[index].qty=cart[index].qty+1
			}
		}
		if(ZERO===count){
			cart.push({
				"itemID":data.food_item_id,
				"itemName": data.food_item_name ,
				"qty" : 1,
				"price":price,
			});	
		}
		this.setState({
			cartMember:cart
		})
	}
	render(){
		let cartItem=this.state.cartMember
		return(
			<div>
				<Header cart={cartItem}/>
				<Home updateCart={this.updateCart}/>
			</div>
		);
	}
}
export default App