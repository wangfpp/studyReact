import React, { Component } from 'react';
import propsType from 'prop-types'
class CommCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            info: props.info
        }
    }
    static defaultProps = {
        info: {
            name: 'wangfpp',
            id: 1,
            comm: ''
        }
    }
    static propsType = {
        info: propsType.object.isRequired

    }
    render() {
        return <div className='comm'>
                <p>
                    <span>{this.state.info.name}</span>
                </p>
                <textarea name="" value={this.state.comm} id="" cols="30" rows="10"></textarea>
        </div>
    }
}