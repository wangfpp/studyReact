import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home/home'; // 首页
import UserManage from './pages/usermanage/usermanage'; // 用户管理
import Test from './pages/test/text';
import Nav from './components/nav/navlink';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Nav></Nav>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/usermanage" component={UserManage}></Route>
            <Route path="/test" component={Test}></Route>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
    module.hot.accept(); 
   }
