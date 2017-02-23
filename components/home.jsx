import React from 'react'
import {Tabs,Tab} from 'react-bootstrap'
class Home extends React.Component{
	constructor(props) {
		super(props);

		this.state={
			dataConfig:[],
			key:0
		}
		this.getGroupName=this.getGroupName.bind(this);
		this.handleSelect=this.handleSelect.bind(this);
		this.getGroupName();
	}
	getGroupName(){
		 $.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data) => {
			this.setState({
				dataConfig:data
			});

		})
	}
	handleSelect(selectedTab){
		this.setState

	}
	render(){
		return(	
		<Tabs defaultActiveKey={1} id="menuTabs" onSelect={this.handleSelect} activeKey={this.state.key}>{
			this.state.dataConfig.map(function(data,i){
				return(<Tab eventKey={i} key={i} title={data.food_group_name}></Tab>)
			})
		}
		</Tabs>
		)
	}
}
export default Home