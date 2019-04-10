import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navlink.css';
export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            navList: [
                {name: '首页', to: '/home'},
                {name: '用户管理', to: '/usermanage'},
                {name: '测试', to: '/test'},
                {name: '设备管理', to: '/device'}
            ]
        }
    }
    render() {
        return (
            <div className="navbar">
                {this.state.navList.map((item, index) => {
                   return <NavLink to={item.to} key={index}>{item.name}</NavLink>
                })}
            </div>
        )
    }
}
