import React, { Component } from 'react';
import styles from './style.less';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

export default class MyMenu extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			mode: "inline"
		};
	}

	changeMode() {
		console.log( this.state.mode );
		this.setState( {
			mode: this.state.mode == "inline" ? 'vertical' : 'inline'
		} );
	}

	render() {
		return (
			<div className={ styles.menu }>
				<Menu mode={this.state.mode}>
					{this.props.menus.map( menu=> {
						return (
							<SubMenu key={menu.title} title={<span><Icon type={menu.icon}/><span className="title">{menu.title}</span></span>}>
								{menu.menus.map( subMenu=> {
									return <Menu.Item key={subMenu.title}><Icon type={subMenu.icon}/>{subMenu.title}</Menu.Item>
								} )}
							</SubMenu>
						)
					} )}
				</Menu>
				<div onClick={this.changeMode.bind( this )}
				     className={styles.menuClose}>{this.state.mode == "inline" ? "收起" : "展开"}</div>
			</div>
		);
	}
}
