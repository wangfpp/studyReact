import React, { Component } from 'react'
export default class Devicesdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.location.id
        }
    }
    componentWillMount() {
        console.log(this.state.id);
    }
    render() {
        return (
            <div>
                设备详情
            </div>
        )
    }
}
