import React from "react";
import { Card, Button } from "antd";
import { connect } from 'react-redux'
import * as actions  from "../../actions/user";

class UserDetailComponent extends React.Component {
	render() {
		console.log( this.props.dispatch );
		return (
			<Card>
				<Button onClick={()=> this.props.getUserInfo( { aaa: 456 } ) }>测试</Button>
				dfdsfdsf
			</Card>
		);
	}
}

export default connect(
	state => ({ user: state.user }),
	{ ...actions }
)( UserDetailComponent )
