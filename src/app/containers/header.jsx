import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'
const Header = (props) =>{
/*		let modalClose = () => this.setState({modalShow:false})*/
		return(
				<div className="headerBox">
				<Button className="menuButton"><Glyphicon glyph="menu-hamburger" /></Button>
				<label>Food Menu</label>
				<Button className="cart"><Glyphicon glyph="shopping-cart" /><label>{}</label></Button>
				
			</div>
			)
	
}
export default Header
/*<Cart show={this.state.modalShow} onHide={modalClose} cartDetails={this.props.cart}/>*/
/*onClick={
					() => {
						this.setState({modalShow:true})
					}
				}*/