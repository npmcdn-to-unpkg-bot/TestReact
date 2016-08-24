import React, { Component, PropTypes } from 'react';
import styles from "./style.less";
import { Input, Button } from "antd";
import Ajax from "../../commons/ajax";

export default class LoginBox extends Component {
	constructor( props ) {
		super( props );
		this.stage = {
			username: "",
			password: "",
			loading: false,
			error: ""
		};
	}

	login( e ) {
		// fetch( "http://admin.ireadercity.com/Order/FindChannels", { method: "POST" } )
		// 	.then( response=> {
		// 		console.log( response )
		// 	} );
		this.setState( {
			loading: true,
			error: ""
		} );

		Ajax.post( "http://admin.ireadercity.com/Order/FindChannels" )
			.success( response=> {
				console.log( response );
			} )
			.send();
	}

	render() {
		return (
			<div className={styles.loginBox}>
				<div className={styles.title}>管理员登录</div>
				<form>
					<Input placeholder="用户名"/>
					<Input type="password" placeholder="密码"/>
					<button type="button" onClick={this.login.bind( this )}>登录</button>
				</form>
			</div>
		)
	}
}
