import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Login from '../components/Login';
import Home from '../components/Home';
import Order from '../components/Order';

const Routes = ( { history } ) =>
	<Router history={history}>
		<Route path="/" component={Home}/>
		<Route path="/Order" component={Order}/>
		<Route path="/login" component={Login}/>
	</Router>;

Routes.propTypes = {
	history: PropTypes.any,
};

export default Routes;
