import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// antd
import 'antd/dist/antd'
import './reset.css'
// import {connect} from 'react-redux'
// 路由
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// 页面  
import Index from './containers'
// import NotFound from './components/notfound';

class App extends Component {
  render() {
    return (
        // 加载路由
        <Router>
            <Switch>
                <Route component={Index}></Route>
                {/* <Route path='/404' component={NotFound}></Route> */}
            </Switch>
        </Router>
        // <NotFound/>
    );
  }
}  
export default App;
