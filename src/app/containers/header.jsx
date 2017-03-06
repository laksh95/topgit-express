import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {increaseQuantity,decreaseQuantity} from '../actions/cartActions.jsx'
class Header extends React.Component{
/*		let modalClose = () => this.setState({modalShow:false})*/
		constructor(props){
			super(props)
			this.props=props
			this.totalQuantity=this.totalQuantity.bind(this)
		}
		totalQuantity(){
			let total_quant=0
			let cartItems=this.props.cart.foodItems
			for(let index in cartItems){
				total_quant+=cartItems[index].quantity
			}
			return total_quant
		}
		render() {
            return (
				<div className="headerBox">
					<Button className="menuButton"><Glyphicon glyph="menu-hamburger"/></Button>
					<label>Food Menu</label>
					<Button className="cart"><Glyphicon glyph="shopping-cart"/><label>{this.totalQuantity()}</label></Button>

				</div>
            )
        }
}
const mapStateToProps = (state)=>{
	return{
		cart:state.updateCart
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		increaseQuantity:()=>{
			dispatch(increaseQuantity())
		},
		decreaseQuantity:()=>{
		dispatch(decreaseQuantity())
		}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
/*<Cart show={this.state.modalShow} onHide={modalClose} cartDetails={this.props.cart}/>*/
/*onClick={
					() => {
						this.setState({modalShow:true})
					}
				}*/