import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
export default connect(state => {
	return {
		user: state.currUse.username
	}
})(class usermanage extends Component {
    constructor(props) {
			super(props)
			this.state = {
				name: '用户管理'
		}
	}
	componentWillMount() {
		console.log(this);
		this.props.history.push({
			pathname: '/usermanage/adduser'
		})
	}
	changename() {
		this.props.dispatch({
			type: 'CHANGE_USR',
			username: 'aaa'
		});
		this.props.dispatch({
			type: 'ADD_TODO',
			id: 'sdk',
			text: 'redux fuck'
		})
		console.log(this);
	}
	render() {
		return <div id="usermanage" onClick={this.changename.bind(this)}>
		<Router>
			<div className="navbar">
				{
					this.props.routes.map((route, index) => {
						return <NavLink  key={index} to={route.path} >{route.name}</NavLink>
					})
				}
			</div>
			
			<div className="leftmenu">
			{
				this.props.routes.map((route, index) => {
					return <Route key={index} exact={route.exact} path={route.path} component={route.component}></Route>
				})
			}
			</div>
			</Router>
		</div>
	}
})
