import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {increaseQuantity,decreaseQuantity} from '../actions/cartActions.jsx'
import {Link} from 'react-router'
import Cart from '../components/cart.jsx'
class Header extends React.Component{
/*		let modalClose = () => this.setState({modalShow:false})*/
		constructor(props){
			super(props)
			this.props=props
			this.totalQuantity=this.totalQuantity.bind(this)
			this.state={
				modalShow:false
			}
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
			let modalClose = () => this.setState({modalShow:false})
            return (
				<div className="headerBox">
					<Button className="menuButton">
						<Link to="/"><Glyphicon glyph="menu-hamburger"/></Link>
					</Button>
					<label>Food Menu</label>
					<Button className="cart" onClick={()=>{
						this.setState({
							modalShow:true
						})
					}}>
						<Glyphicon glyph="shopping-cart"/><label>{this.totalQuantity()}</label>
					</Button>
					<Cart show={this.state.modalShow} onHide={modalClose} cartDetails={this.props.cart.foodItems}
					increaseQuantity={(data)=>{this.props.increaseQuantity(data)}}
						  decreaseQuantity={(data)=>{this.props.decreaseQuantity(data)}}/>
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
		increaseQuantity:(data)=>{
			dispatch(increaseQuantity(data))
		},
		decreaseQuantity:(data)=>{
		dispatch(decreaseQuantity(data))
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