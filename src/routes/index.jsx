import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import App from '../components/App';
import Login from '../components/Login';
import Home from '../components/Home';
import Order from '../components/Order';
import User from "../components/User";
import UserDetail from "../components/User/Detail";

const Routes = ({history}) =>
    <Router history={history}>
        <Route component={App}>
            <Route breadcrumbName="首页" path="/" component={Home}/>
            <Route breadcrumbName="首页" path="/home" component={Home}/>
            <Route breadcrumbName="订单管理" path="/order" component={Order}/>
            <Route breadcrumbName="用户管理" path="/user">
                <Route breadcrumbName="用户详情" path="/" component={User}/>
                <IndexRoute component={User}/>
                <Route breadcrumbName="用户详情" path="detail" component={UserDetail}/>
            </Route>
        </Route>
        <Route breadcrumbName="登录" path="/login" component={Login}/>
    </Router>;

Routes.propTypes = {
    history: PropTypes.any,
};

export default Routes;
