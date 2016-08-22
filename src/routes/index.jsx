import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import Login from '../components/Login/Login';

const Routes = ({history}) =>
    <Router history={history}>
        <Route path="*" component={Login}/>
    </Router>;

Routes.propTypes = {
    history: PropTypes.any,
};

export default Routes;
