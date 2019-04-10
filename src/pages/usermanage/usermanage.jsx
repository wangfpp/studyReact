import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
export default class usermanage extends Component {
    constructor(props) {
			super(props)
			this.state = {
				name: '用户管理'
		}
	}
	componentWillMount() {
		this.props.history.push({
			pathname: '/usermanage/adduser'
		})
	}
	render() {
		return <div id="usermanage">
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
}
