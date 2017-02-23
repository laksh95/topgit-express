import React from 'react'
import {Thumbnail, Grid, Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
class Menu extends React.Component{
	constructor(props) {
		super(props);
		this.props=props;
		this.state={
			foodItems:[],
			foodMap:[]
		}
	}

	getFoodItems(){
		$.getJSON("http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem").then((data)=>{
			this.setState({
				foodItems:data
			})
			this.getSelectedItems();
			console.log(this.props.currentGroup);
		})
	}
	getSelectedItems(){
		var foodItem=[];
		var groupID=this.props.currentGroup;
		console.log(this.state.foodItems)
		this.state.foodItems.map(function(data,index){
			if(data.food_group_id==groupID){
				foodItem.push(data);
				console.log(foodItem[index])
			}
		})
		this.setState({
			foodMap:foodItem
		})
		console.log(this.state.foodMap);
	}
	/*****************calling getFoodItems() in componentWillMount()********************************** 
	******************so that before the Component is rendered api is called*************************/
	componentWillMount() {
		this.getFoodItems();
		
	}
	render(){
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
												<Button bsStyle="primary">Add</Button>
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