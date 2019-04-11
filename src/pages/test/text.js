import React, { Component } from 'react';
import '../../App.css';
import logo from '../../logo.svg'
import Hellow from '../../pages/hellow';
import Clock from '../../pages/clock/clock'; // 倒计时
import { server } from '../../api/index';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
		super(props)
		console.log(this);
    this.state= {
	  name: 'wangfpp',
	  currUsr: this.props.username,
	  userList: [
		{name: '', age: 30, height: 175},
		{name: 'sunkw', age: 40, height: 175},
		{name: 'liuguangyuan', age: 40, height: 175},
		{name: 'wangfpp', age: 30, height: 175}
	  ],
	  helpStr: '',
	  date: this.props.time
    }
  }
  componentWillMount() { // Vue的Create
		// this.getData();
  }
  componentDidMount() { // Vue的mounted
	  // console.log('didMount', this);
	}
  getData() {
	  server.sysHelp().then(res => {
		  // console.log(res);
		  this.setState({
			  helpStr: res
		  })
	  }, err => {
		  console.log(err);
	  })
  }
  changeState(a) {
	// console.log(a);
	// console.log(this.refs.childCom)
		
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
		this.props.dispatch({
			type: 'CHANGE_USR',
			username: user.name
		})
	  this.setState({
		  currUsr: user.name
		})
  }
  changeDate(date) {
	// this.setState({
	// 	date: date
	// })
	this.props.dispatch({
		type: 'CHANGE_TIME',
		num: date
	});
  }
  render() { // Render UI
    return (
      <div className="App">
        <header className="App-header">
          <img className="img" src={logo} alt="logo"/>
        </header>
        <h3>我的名字是:{this.props.username ? this.props.username : '暂无用户名'}</h3>
        
		<div className="list" style={{margin:'10px 0', paddingTop: '10px'}}>
			{this.state.userList.map((item, index) => {
				if (index === 0) {
					return <Hellow 
								className={`node ${item.name === this.state.currUsr ? 'curr': ''}`} 
								key={index}
								height={item.height}
								change={this.changeUsr.bind(this, item)}>
							</Hellow>
				} else {
					return <Hellow 
								className={`node ${item.name === this.state.currUsr ? 'curr': ''}`} 
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

export default connect(state => {
	return {
		time: state.time,
		username: state.currUse.username
	}
})(App);
