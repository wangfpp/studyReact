import React, { Component } from 'react'

export default class Devicelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devicelist: [
                { name: 'one', id: 1 },
                { name: 'two', id: 2 }
            ]
        }
    }
    /**
     * @description: 
     * @param {type} 
     * @return: 
     */
    viewDetail(device) {
        this.props.history.push({
            pathname: '/device/devicedetail',
            id: device.id
        });
    }
    render() {
        return (
            <div>
                <h3>设备列表</h3>
                <div>
                    {this.state.devicelist.map((device, index) => {
                        return <ul key={index}>
                            <li onClick={this.viewDetail.bind(this, device)}>
                                <span>{device.name}</span>
                                <span>{device.id}</span>
                            </li>
                        </ul>
                    })}
                </div>
            </div>
        )
    }
}
