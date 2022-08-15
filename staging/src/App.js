import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MyNavLink from './components/MyNavLink';
import Header from './components/Header';
import Ant from './pages/Ant/';
import Semt from './pages/Semt';
import Next from './pages/Next';
import 'antd/dist/antd.css';


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">

                                {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                                {/*<NavLink activeClassName='xl' className="list-group-item" to="/about">About</NavLink>*/}
                                {/*<NavLink activeClassName='xl' className="list-group-item" to="/home">Home</NavLink>*/}
                                <MyNavLink to='/ant'>ant</MyNavLink>
                                <MyNavLink to='/semt'>semt</MyNavLink>
                                <MyNavLink to='/next'>next</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* 注册路由 */}
                                    <Switch>
                                        <Route path="/ant" component={Ant}/>
                                        <Route path="/semt" component={Semt}/>
                                        <Route path="/next" component={Next}/>
                                        <Redirect to='about'/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;