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
		for(var i in cart){
			if(cart[i].itemID===data.food_item_id){
				count =1 
				cart[i].qty=cart[i].qty+1
			}
		}
		if(count==0){
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