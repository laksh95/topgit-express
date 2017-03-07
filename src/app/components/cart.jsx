import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router'
class Cart extends React.Component{
    constructor(props) {
        super(props)
        this.subFromCart = this.subFromCart.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.props=nextProps
    }
    subFromCart(data){
        let cart=this.props.cartDetails
        data.map((items,index)=>{
            if(cart[index].itemID===items.itemID){
                items.quantity-=1
            }
        })
    }
    addToCart(data){
        let cart=this.props.cartDetails
        data.map((items,index)=>{
            if(cart[index].itemID===items.itemID){
                items.quantity+=1
            }
        })
    }
    render(){
        console.log(this.props.cartDetails)
        let cost=0
        let ADD='+'
        let SUB='-'
        let that=this
        return (
            <Modal {...that.props}
                   hide={that.props.onHide}>
                <Modal.Body>
                    <div>{
                        this.props.cartDetails.map((data,index)=>{
                            cost+=(data.quantity*data.price)
                            return(
                                <div>
                                    <strong><label id={index}>{data.itemName}</label></strong>
                                    <div>
                                        <label>Price: ${data.price}</label>&emsp;
                                        <label>Quantity: <Button color="primary" onClick={
                                            () =>{
                                                that.props.decreaseQuantity(data)

                                            }
                                        }>{SUB}</Button>&emsp;{data.quantity}&emsp;<Button color="primary" onClick={
                                            () =>{
                                                that.props.increaseQuantity(data)
                                            }
                                        }>{ADD}</Button></label>

                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <label>Total Cost: ${cost}</label>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="primary" onClick={that.props.onHide}>Add Items</Button>
                   <Link
                        to="/checkout"> <Button color="primary" onClick={that.props.onHide}>Checkout</Button></Link>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Cart
/*export default Cart*/
