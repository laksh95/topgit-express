import React from 'react'
import Items from '../containers/Items.jsx'
import {Tabs,Tab} from 'react-bootstrap'
import addMenu from '../actions/foodAction.jsx'
import {connect} from 'react-redux'
class Menu extends React.Component{
	componentWillMount(){
		this.props.addFoodMenu()
	}
	render() {
        return (
			<div className="container">
				<Tabs defaultActiveKey={1} id="menuTabs">{
                    /***************************returning <Tab> and <Menu> together so that each
                     ***************************tab menu has its own food menu, i.e each tab menu
                     ***************************has its own child. Sending food_group_id so that
                     **************************************************************************/
                    this.props.foodMap.map(function (data, i) {
                        return (<Tab eventKey={i} key={i} title={data.food_group_name}>
								<Items currentGroup={data.food_group_id}/></Tab>
                        )
                    })
                }
				</Tabs>
			</div>
        )
    }
}
const mapStateToProps = (state)=>{
	return{
		foodMap:state.addMenu.foodGroups
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		addFoodMenu:()=>{
			dispatch(addMenu())
		}

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu)




