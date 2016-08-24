import React, { Component, PropTypes } from 'react';
import TopBar from "./TopBar";
import Menu from "./Menu";
import styles from './style.less';

let menus = [
	{
		title: "系统管理 ",
		icon: "setting",
		menus: [
			{
				title: "菜单管理",
				icon: "appstore-o"
			},
			{
				title: "通用配置管理",
				icon: "setting"
			},
			{
				title: "权限管理",
				icon: "setting"
			}
		]
	},
	{
		title: "用户管理",
		icon: "team",
		menus: [
			{
				title: "所有用户",
				icon: "team"
			},
			{
				title: "用户异常",
				icon: "team"
			}
		]
	},
	{
		title: "订单管理",
		icon: "shopping-cart",
		menus: [
			{
				title: "充值档位配置",
				icon: "pay-circle-o"
			},
			{
				title: "订单管理",
				icon: "shopping-cart"
			}
		]
	},
	{
		title: "网站管理",
		icon: "laptop",
		menus: [
			{
				title: "活动管理",
				icon: "star-o"
			},
			{
				title: "书包管理",
				icon: "folder"
			},
			{
				title: "心愿书单管理",
				icon: "folder"
			},
			{
				title: "广告管理",
				icon: "solution"
			}
		]
	}
];

export default class MainLayout extends Component {
	render() {
		return (
			<div className={styles.continer}>
				<TopBar/>
				<div className={styles.content}>
					<div style={{ display: "table", height: "100%", width: "100%" }}>
						<Menu menus={menus}/>
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
