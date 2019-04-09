import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            navList: [
                {name: '首页', to: '/home'},
                {name: '用户管理', to: '/usermanage'},
                {name: '测试', to: '/test'}
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.navList.map((item, index) => {
                   return <NavLink to={item.to}>{item.name}</NavLink>
                })}
            </div>
        )
    }
}
