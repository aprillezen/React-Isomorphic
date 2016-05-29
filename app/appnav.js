import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class appnav extends React.Component{
	render(){
		return(
			<div> 
				<Navbar inverse fixedTop>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">Akadem</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <LinkContainer to="/home"> 
				              <NavItem eventKey={1}>Home</NavItem>
				        </LinkContainer>
				        <LinkContainer to="/student"> 
				              <NavItem eventKey={2}>Students</NavItem>
				        </LinkContainer>
				        
				      </Nav>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">Link Right</NavItem>
				        <NavItem eventKey={2} href="#">Link Right</NavItem>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>

			{ this.props.children }

			 </div>


		)
	}

}

export default appnav;