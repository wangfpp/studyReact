import React, { Component } from 'react'

export default class usermanage extends Component {
    constructor() {
		super()
		this.state = {
			name: '用户管理'
		}
	}
	render() {
		return <div id="usermanage">
			<div>
				{this.state.name}
			</div>
		</div>
	}
}
