import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import './navlink.css';
export default connect(state => {
    return {
        username: state.currUse.username
    }
})(class Nav extends Component {
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
            <div id="nav">
                <div className="navbar">
                    {this.state.navList.map((item, index) => {
                    return <NavLink to={item.to} key={index}>{item.name}</NavLink>
                    })}
                </div>
                <div className="username">
                    您好:{this.props.username ? this.props.username : '暂无用户名'}
                </div>
            </div>
        )
    }
})
