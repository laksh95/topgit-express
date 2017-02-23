import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import Menu from './Menu.jsx'
class Header extends React.Component{
	render(){
		return(
			<div className="headerBox">
				<Button className="menuButton"><Glyphicon glyph="menu-hamburger" /></Button>
				<label>Food Menu</label>
				<Button className="cart"><Glyphicon glyph="shopping-cart" /></Button>
			</div>
		)
	}
}
export default Header