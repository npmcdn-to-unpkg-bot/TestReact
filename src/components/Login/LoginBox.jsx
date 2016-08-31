import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Input, Button } from "antd";
import { login }  from "../../actions/user";
import styles from "./style.less";

export default class LoginBox extends Component {
	render() {
		return (
			<div className={styles.loginBox}>
				<div className={styles.title}>管理员登录</div>
				<form>
					<Input placeholder="用户名"/>
					<Input type="password" placeholder="密码"/>
					<button type="button" onClick={ ()=>this.props.login() }>登录</button>
				</form>
			</div>
		)
	}
}

export default connect(
	state=>({ user: state.user }),
	{ login }
)( LoginBox );
