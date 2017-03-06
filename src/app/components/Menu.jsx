import React from 'react'
import Items from '../containers/Items.jsx'
import {Tabs,Tab} from 'react-bootstrap'
const Menu = (props) =>{
	return(
		<div className="container">
			<Tabs defaultActiveKey={1} id="menuTabs">{
                /***************************returning <Tab> and <Menu> together so that each
                 ***************************tab menu has its own food menu, i.e each tab menu
                 ***************************has its own child. Sending food_group_id so that
                 **************************************************************************/
                props.foodMap.map(function(data,i){
                    return(<Tab eventKey={i} key={i} title={data.food_group_name}>
							<Items currentGroup={data.food_group_id} /></Tab>
                    )
                })
            }
			</Tabs>
		</div>
	)
}

export default Menu




