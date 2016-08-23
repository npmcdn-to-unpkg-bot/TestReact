import React, { Component, PropTypes } from 'react';
import styles from "./style.less";
import { Input, Button } from "antd";

export default class LoginBox extends Component {
	render() {
		return (
			<div className={styles.loginBox}>
				<div className={styles.title}>管理员登录</div>
				<form>
					<Input placeholder="用户名"/>
					<Input type="password" placeholder="密码"/>
					<button>登录</button>
				</form>
			</div>
		)
	}
}

