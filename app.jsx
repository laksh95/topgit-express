import React from 'react';
import Operations from './components/Operations.jsx';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			result:''
		}
		this.getResults=this.getResults.bind(this);
	}
	getResults(response){
		console.log(response);
		this.setState(
			{
				result:response
			});
	}
   render() {
      return (
         <div>
            <Operations getResults={this.getResults}/>
          	<span>{this.state.result}</span>
          </div>
      )
   }
}

export default App;