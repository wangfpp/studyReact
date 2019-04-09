import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Hellow from './pages/hellow';
import Clock from './pages/clock/clock'; // 倒计时
import { server } from './api/index';

class App extends Component {
  constructor() {
    super()
    this.state= {
	  name: 'wangfpp',
	  currUsr: 'wangfpp',
	  userList: [
		{name: '', age: 30, height: 175},
		{name: 'sunkw', age: 40, height: 175},
		{name: 'liuguangyuan', age: 40, height: 175},
		{name: 'wangfpp', age: 30, height: 175}
	  ],
	  helpStr: '',
	  date: new Date().getTime()
    }
  }
  componentWillMount() { // Vue的Create
		// this.getData();
  }
  componentDidMount() { // Vue的mounted
	  console.log('didMount', this);
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
  changeUsr(user, a) {
	  console.log(user, a)
	  this.setState({
		  currUsr: user.name
	  })
  }
  changeDate(date) {
	// console.log(date);
	this.setState({
		date: date
	})
  }
  render() { // Render UI
    return (
      <div className="App">
        <header className="App-header">
          <img className="img" src={logo} alt="logo"/>
        </header>
        <h3>我的名字是:{this.state.currUsr}</h3>
        
		<div className="list" style={{margin:'10px 0'}}>
			{this.state.userList.map((item, index) => {
				if (index === 0) {
					return <Hellow 
								className={`node ${item.name === this.state.currUsr ? 'curr': ''}`} 
								ref="childCom" 
								key={index}
								height={item.height}
								change={this.changeUsr.bind(this, item)}>
							</Hellow>
				} else {
					return <Hellow 
								className={`node ${item.name === this.state.currUsr ? 'curr': ''}`} 
								ref="childCom" 
								key={index}
								name={item.name}
								height={item.height}
								change={this.changeUsr.bind(this, item)}>
							</Hellow>
				}
			})}
		</div>

		<div className="clock">
			{this.state.date > 0 ? <Clock date={this.state.date} change={this.changeDate.bind(this)}></Clock> : ''}
			
		</div>
	  </div>
    );
  }
}

export default App;
