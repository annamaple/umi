import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// 路由组件
import About from './pages/About';
import Home from './pages/Home';
// 一般组件
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
import './App.css'

class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            {/*<NavLink activeClassName='xl' className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName='xl' className="list-group-item" to="/home">Home</NavLink>*/}
                            <MyNavLink to='/home'>Home</MyNavLink>
                            <MyNavLink to='/about'>About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;