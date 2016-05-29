import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Nav from './appnav'
import Home from './home'
import Student from './students'

module.exports = (
  <Route path="/" component={Nav}>
  	 <Route path='/home' component={Home} /> 
  	  <Route path='/student' component={Student} />
  </Route>
)
