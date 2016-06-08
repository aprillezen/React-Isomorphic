import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

class appLogin extends React.Component{

	render(){
		return(
			<div className="container">
			    <div className="card card-container">
			        <img id="logo-img" className="logo-img" src="https://placeholdit.imgix.net/~text?txtsize=24&txt=150x150&w=150&h=150" />
			        <form className="form-signin">			        	
			            <input type="email" id="inputEmail" className="form-control" placeholder="email" required autofocus />
			            <input type="password" id="inputPassword" className="form-control" placeholder="password" required />
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