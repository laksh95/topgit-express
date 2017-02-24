import React from 'react'
import {Modal,Alert,Button,Label} from 'react-bootstrap'
class Cart extends React.Component{
	constructor(props) {
		super(props);		
				this.state={
			cart:this.props.cartDetails
		}
	}
	componentWillReceiveProps(nextProps) {
		this.props=nextProps
		this.setState({
			cart:this.props.cartDetails
		})
	}
	render(){
		console.log(this.state.cart,this.props.cartDetails)
		let cost=0
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
		      					<label>Quantity: {data.qty}</label>
		      				</div>
		      			</div>
	      			)
	      		})
	      	}
	      	</div>
	      	<label>Total Cost: ${cost}</label>
	      	</Modal.Body>
	      	<Modal.Footer>
	      		<Button bsStyle="primary" onClick={this.props.onHide}>Add Items</Button>
	      		<Button bsStyle="primary" onClick={this.props.onHide}>Make Payment</Button>
	      	</Modal.Footer>
	      </Modal>
	    );
	}
}
export default Cart