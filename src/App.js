import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Hellow from './pages/hellow';
import { server } from './api/index';

class App extends Component {
  constructor() {
    super()
    this.state= {
	  name: 'wangfpp',
	  currUsr: 'wangfpp',
	  userList: [
		{name: 'sundy'},
		{name: 'sunkw'},
		{name: 'liuguangyuan'},
		{name: 'wangfpp'}
	  ],
	  helpStr: ''
    }
  }
  componentWillMount(a, b) {
	console.log('willMount', a, b, this);
	this.getData();
  }
  componentDidMount(a, b) {
	  console.log('didMount', a, b, this);
  }
  getData() {
	  server.sysHelp().then(res => {
		  console.log(res);
		  this.setState({
			  helpStr: res
		  })
	  }, err => {
		  console.log(err);
	  })
  }
  changeState(a) {
	// console.log(a);
	console.log(this.refs.childCom)
    let name = this.state.name;
    if (name === 'wangfpp') {
		this.setState({
			name: 'sundy'
		})
    } else {
		this.setState({
			name: 'wangfpp'
		  })
	}
  }
  changeUsr(user) {
	  this.setState({
		  currUsr: user.name
	  })
  }
  render() { // Render UI
    return (
      <div className="App">
        <header className="App-header">
          <img className="img" src={logo} alt="logo"/>
        </header>
        <h3>我的名字是:{this.state.name}</h3>
        <Hellow ref="childCom" name={this.state.name} change={this.changeState.bind(this)}></Hellow>
		{this.state.userList.map((item, index) => {
			return index > 0 ? <li className={item.name === this.state.currUsr ? 'curr' : ''} 
								key={index}
								onClick={this.changeUsr.bind(this, item)}>
						<span>{item.name}</span>
					</li> : ''
		})}
		<div>{this.state.helpStr}</div>
	  </div>
    );
  }
}

export default App;
