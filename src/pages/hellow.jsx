import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { findDOMNode } from 'react-dom'
class Hellow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            age: 12
        }
    }
    static defaultProps = {
        name: 'ddkk1212'
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired
    }
    componentDidMount() { // 挂载的生命周期
        // let node = findDOMNode(this);
        // console.log(node);
    }
    componentWillUpdate(nextProps, nextState){
        // this.state.name = nextProps.name;
        // console.log(this);
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
        // let node = this.refs.node;
        this.props.change();
    }
    render() {
        return <div className={this.props.className}>
            <span> Hellow { this.state.name } </span>
            <button onClick={this.modifyName.bind(this)}>修改</button>
        </div>;
    }
};
export default connect(state => {
    return {
        todos: []
    }
})(Hellow);