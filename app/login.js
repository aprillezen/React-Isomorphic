import React from 'react'
import _ from 'lodash'
import {Alert} from 'react-bootstrap'

class appLogin extends React.Component{
	constructor(){
		super()
		this.state = {
			username: '',
			hasError:false,
			errorMsg:''
		}

	}

	onSubmit(e){
		e.preventDefault()
	    if (_.isEmpty(this.state.username)){
     		this.setState({errorMsg:'Empty username'})
     		this.setState({hasError:true})
     	    return
     	 } 

     	 this.setState({hasError:false})

	}

	onChange(e){
		this.setState({ username: e.target.value})

	}

    closeAlert(){
		this.setState({hasError:false})
	}

	render(){
		var Err = <div></div>
		if (this.state.hasError){
			Err = <Alert bsStyle="danger" onDismiss={this.closeAlert.bind(this)}>
					<p>{this.state.errorMsg}</p>
				  </Alert>
		}

		return(
			<div className="container">
			    <div className="card card-container">
			        {Err}
			        <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>			        	
			            <input type="text" id="txtuser" className="form-control" placeholder="User Name" autofocus onChange={this.onChange.bind(this)} value={this.state.username} />
			            <input type="password" id="inputPassword" className="form-control" placeholder="password" />
			            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">login</button>
			        </form>
			        <div className="signin-help">
						<p>forgot your password? <a href="#">click here</a></p>
						<p>new user? <a href="#">create new account</a></p>
					</div>
			    </div>
			</div>

			)
	}
}

export default appLogin