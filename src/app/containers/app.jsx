import React from 'react'
import Header from './header.jsx'
import Menu from '../components/Menu.jsx'
import {connect} from 'react-redux'
import addMenu from '../actions/foodAction.jsx'
class App extends React.Component{
	componentWillMount(){
		this.props.addMenu()
	}
	render(){
		return(
			<div>
				<Header />
				<Menu foodMap={this.props.food.foodGroups} />
			</div>
			)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
	addMenu:()=>{
		dispatch(addMenu())
		}
	}
}

const mapStateToProps = (state) =>{
	return{
            food:state.addMenu
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App)
