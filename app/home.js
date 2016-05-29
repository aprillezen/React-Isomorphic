import React from 'react'
import ajax from 'superagent'

class home extends React.Component{
	constructor(){
		super()
		this.state = { data: [] }
	}
	componentWillMount(){
		ajax.get("/api/users")
			.end((error, response)=>{
				if (!error && response){
					this.setState({ data: response.body })
					console.log(response.body);
				}else{
					console.log("Error on api")
				}
			})

	}
	render(){
		var users = this.state.data;
		return(
			<div>
				<h1> Home </h1>


			</div>

		)
	}

}

export default home