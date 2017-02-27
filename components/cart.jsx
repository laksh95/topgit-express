import React from 'react'
import {Modal,Alert,Label} from 'react-bootstrap'
import { Button } from 'reactstrap'
class Cart extends React.Component{
	constructor(props) {
		super(props);		
				this.state={
			cart:this.props.cartDetails
		}
		this.addToCart=this.addToCart.bind(this)
		this.subFromCart=this.subFromCart.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		this.props=nextProps
		this.setState({
			cart:this.props.cartDetails
		})
	}
	addToCart(data){
		let cart=this.state.cart
		console.log('hello world')
		for(let index in cart){
			if(cart[index].itemID===data.itemID){
				cart[index].qty=cart[index].qty+1
				console.log('quantity updated')
			}
		}
		this.setState({
			cart:cart
		})
	}
	subFromCart(data){
		let cart=this.state.cart
		for(let index in cart){
			if(cart[index].itemID===data.itemID){
				if(data.qty>0)
				cart[index].qty=cart[index].qty-1
			}
		}
		this.setState({
			cart:cart
		})
	}
	render(){
		console.log(this.state.cart,this.props.cartDetails)
		let cost=0
		let add='+'
		let sub='-'
		var that=this
	    return (
	      <Modal {...this.props} 
	      hide={this.props.onHide}>
	      	<Modal.Body>
	      	<div className="borderLine">{
	      		this.state.cart.map((data,index)=>{
	      			cost+=(data.qty*data.price)
	      			return(
	      				<div>
	      					<strong><label>{data.itemName}</label></strong>
	      					<div>
	      						<label>Price: ${data.price}</label>&emsp;
		      					<label>Quantity: <Button color="primary" onClick={
		      						() =>{
		      							that.subFromCart(data)
		      							
		      						}
		      					}>{sub}</Button>&emsp;{data.qty}&emsp;<Button color="primary" onClick={
		      						() =>{
		      							that.addToCart(data)
		      						}
		      					}>{add}</Button></label>
		      					
		      				</div>
		      			</div>
	      			)
	      		})
	      	}
	      	</div>
	      	<label>Total Cost: ${cost}</label>
	      	</Modal.Body>
	      	<Modal.Footer>
	      		<Button color="primary" onClick={this.props.onHide}>Add Items</Button>
	      		<Button color="primary" onClick={this.props.onHide}>Make Payment</Button>
	      	</Modal.Footer>
	      </Modal>
	    );
	}
}
export default Cart