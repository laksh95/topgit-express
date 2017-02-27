import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import {ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import { Button } from 'reactstrap'
import Menu from './Menu.jsx'
import Cart from './cart.jsx'
import {Modal} from 'react-bootstrap'
class Header extends React.Component{
	constructor(props) {
		super(props);
		this.showCart=this.showCart.bind(this)
		this.state={
			modalShow:false
		}
		this.totalQuantity=this.totalQuantity.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.props=nextProps
	}
	totalQuantity(){
		console.log('total quantity called')
		let cartItems=this.props.cart
		let quant=0
		for(let index in cartItems){
			quant=quant+cartItems[index].qty
		}
		return quant
	}
	showCart(){
		console.log('hello');
		return (<Cart/>)
	}
	render(){
		let modalClose = () => this.setState({modalShow:false})
		return(
			<div className="headerBox">
				<Button className="menuButton"><Glyphicon glyph="menu-hamburger" /></Button>
				<label>Food Menu</label>
				<Button className="cart" onClick={
					() => {
						this.setState({modalShow:true})
					}
				}><Glyphicon glyph="shopping-cart" /><label>{this.totalQuantity()}</label></Button>
				<Cart show={this.state.modalShow} onHide={modalClose} cartDetails={this.props.cart}/>
			</div>
		)
	}
}
export default Header