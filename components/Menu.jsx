import React from 'react'
import {Thumbnail, Grid, Row, Col} from 'react-bootstrap'
import {Button, Glyphicon} from 'react-bootstrap'
class Menu extends React.Component{
	constructor(props) {
		super(props);
		this.props=props;
		this.state={
			foodItems:[],
			foodMap:[],
			cart:[]
		}
		this.addItem=this.addItem.bind(this)
	}

	getFoodItems(){
		$.getJSON("http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem").then((data)=>{
			this.setState({
				foodItems:data
			})
			this.getSelectedItems();
		})
	}
	getSelectedItems(){
		var foodItem=[];
		var groupID=this.props.currentGroup;
		this.state.foodItems.map(function(data,index){
			if(data.food_group_id==groupID){
				foodItem.push(data);
			}
		})
		this.setState({
			foodMap:foodItem
		})
	}
	componentWillReceiveProps(nextProps) {
		this.props=nextProps
	}
	/*****************calling getFoodItems() in componentWillMount()********************************** 
	******************so that before the Component is rendered api is called*************************/
	componentWillMount() {
		this.getFoodItems();
		
	}
	addItem(data){
		
		this.props.updateCart(data)
	}

	render(){
		var that=this;
		return(
			<div>
				<Grid>
					<Row>{
							this.state.foodMap.map(function(data,index){
								return(
									<Col xs={12} md={3} key={index}>
										<Thumbnail src={data.food_item_pic} alt="image">
											<h3>{data.food_item_name}</h3>
											<h5>${data.food_item_price}</h5>
											<p>
												<Button onClick={
													() => that.addItem(data)
												}><Glyphicon glyph="plus" /></Button>
											</p>
										</Thumbnail>
									</Col>
								)
							})
						}	
					</Row>
				</Grid>
			</div>
		)
	}
}
export default Menu