import React from 'react'
import {connect} from 'react-redux'
class Checkout extends React.Component{
    componentWillReceiveProps(nextProps){
        this.props=nextProps
    }
    render(){
        let that=this
        return(
            <div className="container">


                        <div>
                        <p>
                            <h3>Item Name&emsp;&emsp;Quantity&emsp;&emsp;Price</h3>
                        </p>
                        </div>
                {
                        that.props.cart.map((data,index)=>{
                            return(
                                <div id={index}>
                                    <p id={index}>
                                        {
                                            <h4>{data.itemName}&emsp;
                                                {data.quantity}&emsp;
                                                {data.price}
                                            </h4>


                                        }
                                    </p>
                                </div>

                            )

                        })
                    }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        cart:state.updateCart.foodItems
    }

}
export default connect(mapStateToProps)(Checkout)