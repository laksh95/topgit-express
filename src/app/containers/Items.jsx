import React from 'react'
import {Grid,Row,Col,Thumbnail,Button,Glyphicon} from 'react-bootstrap'
import addFoodItems from '../actions/itemAction.jsx'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions.jsx'
import LazyLoad from 'react-lazyload'
class Items extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cartMember:[]
        }
        this.addItemsToCart=this.addItemsToCart.bind(this)
    }
    componentWillReceiveProps(nextProps){
        this.props=nextProps
    }
    componentWillMount(){
        this.props.getItems()
    }
    addItemsToCart(data){
       this.props.addToCart(data)
    }
    render() {
        let that=this
        return (
            <div>
                <Grid>
                    <Row>{
                        that.props.foodItems.foodItems.map((data, index) => {
                            if(data.food_group_id===that.props.currentGroup) {
                                return (
                                    <Col xs={12} md={3} key={index}>
                                        <Thumbnail src={data.food_item_pic} alt="image">
                                            <h3>{data.food_group_name}</h3>
                                            <h5>${data.food_item_price}</h5>
                                            <p>
                                                <Button id={index} onClick={
                                                    ()=>{
                                                        that.addItemsToCart(data)
                                                    }
                                                }><Glyphicon glyph="plus"/></Button>
                                            </p>
                                        </Thumbnail>

                                    </Col>
                                )
                            }
                        })
                    }
                    </Row>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        foodItems:state.addItems,
        cartItems:state.updateCart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getItems:()=>{
            dispatch(addFoodItems())
        },
        addToCart:(data)=>{
            dispatch(addToCart(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Items)