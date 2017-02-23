import React from 'react';
import Home from './components/home.jsx'
import Header from './components/header.jsx'
class App extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<Home/>
			</div>
		);
	}
}
export default App