import React from 'react'
import Header from './header.jsx'
import Menu from '../components/Menu.jsx'
import {connect} from 'react-redux'
import addMenu from '../actions/foodAction.jsx'
class App extends React.Component{
	render(){
		return(
			<div>
				<Header />

			</div>
			)
	}
}
/*
const mapDispatchToProps = (dispatch) =>{
	return{
	addMenu:()=>{
		dispatch(addMenu())
		}
	}
}
    return{
        const mapStateToProps = (state) =>{
            food:state.addMenu
    }

}
connect(mapStateToProps,mapDispatchToProps)(App)*/
export default App