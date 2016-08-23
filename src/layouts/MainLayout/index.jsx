import React, { Component, PropTypes } from 'react';
import TopBar from "./TopBar";
import Menu from "./Menu";
import styles from './style.less';

export default class MainLayout extends Component {
	render() {
		return (
			<div className={styles.continer}>
				<TopBar/>
				<div className={styles.content}>
					<div style={{ display: "table", height: "100%", width: "100%" }}>
						<Menu/>
						<div style={{ display: "table-cell" }}>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
};

MainLayout.propTypes = {
	children: PropTypes.element.isRequired,
};