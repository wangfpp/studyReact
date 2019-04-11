import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/index'
import { createStore } from 'redux'
import './index.css';
import './static/css/comm.css';
import routes from './route/index'; 
import Nav from './components/nav/navlink';
import * as serviceWorker from './serviceWorker';
console.log(rootReducer)
const store = createStore(rootReducer)
// console.log(store)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Nav></Nav>
                <Switch>
                    {
                        routes.map((route, index) => {
                            if(route.redirect) {
                                return (<Route 
                                    key={index} 
                                    exact={route.exact ? true : false}
                                    path={route.path}
                                    render={props => 
                                        <route.component {...props} routes={route.routes} />
                                    }>
                                    {/* <Redirect to={route.redirect}></Redirect> */}
                                </Route>)
                            } else {
                                    return <Route 
                                        key={index} 
                                        exact={index === 0 ? true : false}
                                        path={route.path}
                                        render={props => 
                                            <route.component {...props} routes={route.routes} />
                                        }>
                                    </Route>
                                    
                            }
                                
                        })
                    }
                    <Redirect path="/" to={{pathname: '/home'}} />
                </Switch>
            
            
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
    module.hot.accept(); 
   }
