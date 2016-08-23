import React, { Component, PropTypes } from 'react';
import styles from './style.less';
import logoImage from "./logo.png";

export default class TopBar extends Component {
	render() {
		return (
			<div className={styles.top}>
				<img className={styles.logo} src={logoImage}/>
			</div>
		)
	}
};