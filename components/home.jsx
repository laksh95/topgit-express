import React from 'react'
import {Tabs,Tab} from 'react-bootstrap'
import Menu from './Menu.jsx'
class Home extends React.Component{
	constructor(props) {
		super(props);
		this.props=props;
		this.state={
			dataConfig:[],
			foodItems:[],
			key:0
		}
		this.getGroupName=this.getGroupName.bind(this);
		this.handleSelect=this.handleSelect.bind(this);
		this.getGroupName();
		this.getFoodItems()
	}
	getGroupName(){
		 $.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data) => {
			this.setState({
				dataConfig:data
			});

		})
	}
	componentWillReceiveProps(nextProps) {
		this.props=nextProps
	}
	getFoodItems(){
		$.getJSON("http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem").then((data)=>{
			this.setState({
				foodItems:data
			})
		})

	}
	handleSelect(selectedTab){
		this.setState({
			key:selectedTab
		})
	}
	render(){
		var that=this;
		return(	
			<div className="container">
				<Tabs defaultActiveKey={1} id="menuTabs" onSelect={this.handleSelect} activeKey={this.state.key}>{
					/***************************returning <Tab> and <Menu> together so that each
					***************************tab menu has its own food menu, i.e each tab menu 
					***************************has its own child. Sending food_group_id so that ******************************/
					this.state.dataConfig.map(function(data,i){  
						return(<Tab eventKey={i} key={i} title={data.food_group_name}>
								<Menu currentGroup={data.food_group_id} updateCart={that.props.updateCart}/></Tab>
							)
					})
				}
				</Tabs>	
			</div>
		)
	}
}
export default Home