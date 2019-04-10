import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './index.css';
import './static/css/comm.css';
import routes from './route/index'; 
import Nav from './components/nav/navlink';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Nav></Nav>
           {
               routes.map((route, index) => {
                    return <Route key={index} 
                    exact={route.exact ? true : false}
                    path={route.path}
                    render={props => 
                        <route.component {...props} routes={route.routes} />
                    }>
                    </Route>
               })
           }
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
