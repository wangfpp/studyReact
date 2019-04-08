import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
class Hellow extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            name: props.name,
            age: 12
        }
    }
    componentDidMount() { // 挂载的生命周期
        let node = findDOMNode(this);
        console.log(node);
    }
    componentWillUpdate(nextProps, nextState){
        // this.state.name = nextProps.name;
    }
    componentDidUpdate(prevProps,prevState) {
        // console.log(1, prevProps,prevState)
    }
    componentWillReceiveProps(newval, old) {
        this.setState({
            name: newval.name
        })
        // this.state.name = newval.name
    }
    modifyName(e) {
        // console.log(this);
        // this.props.name = 'sundy'
        // this.setState({name: 'sundy'})
        let node = this.refs.node;
        this.props.change(node);
    }
    render() {
        return <div>
            <span> Hellow { this.state.name } </span>
            <button ref="node" onClick={this.modifyName.bind(this)}>修改</button>
        </div>;
    }
};
export default Hellow;