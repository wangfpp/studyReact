import React, { Component } from 'react';
class Home extends Component{
    constructor() {
        super()
        this.state = {
            name: '首页'
        }
    }
    componentWillMount() {

    }
    render() {
        return <div id="home">
            <div>
                {this.state.name}
            </div>
        </div>
    }
}

export default Home;