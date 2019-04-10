import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
export default class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '设备'
        }
    }
    componentWillMount() {

    }
    render() {
        return (
            <div id="devices">
                <Router>
                    <div className="navbar">
                        {
                            this.props.routes.map((route, index) => {
                                return <NavLink to={route.path} key={index}>{route.name}</NavLink>
                            })
                        }
                    </div>
                    <div>
                        {
                            this.props.routes.map((route, index) => {
                                return <Route 
                                        exact={route.exact} 
                                        key={index}
                                        path={route.path}
                                        component={route.component}
                                        ></Route>
                            })
                        }
                    </div>
                </Router>
            </div>
        )
    }
}
