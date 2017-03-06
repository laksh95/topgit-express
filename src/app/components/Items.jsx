import React from 'react'
import {Grid,Row,Col,Thumbnail,Button,Glyphicon} from 'react-bootstrap'
import addFoodItems from '../actions/itemAction.jsx'
import {connect} from 'react-redux'
class Items extends React.Component{
    componentWillMount(){
        this.props.getItems()
    }
    render() {
        console.log('items.jsx',this.props.foodItems)
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
                                                <Button><Glyphicon glyph="plus"/></Button>
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
        foodItems:state.addItems
    }

}
const mapDispatchToProps = (dispatch)=>{
    return{
        getItems:()=>{
            dispatch(addFoodItems())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Items)