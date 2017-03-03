import React from 'react'
import {Grid,Row,Col,Thumbnail,Button,Glyphicon} from 'react-bootstrap'
const Menu = (props) =>{
	return(
			<div>
				<Grid>
					<Row>{
                        props.foodMap.map(function (data, index) {
                            return (
								<Col xs={12} md={3} key={index}>
									<Thumbnail src={data.food_item_pic} alt="image">
										<h3>{data.food_item_name}</h3>
										<h5>${data.food_item_price}</h5>
										<p>
											<Button><Glyphicon glyph="plus"/></Button>
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

export default Menu