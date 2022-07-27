import React, {Component} from 'react';
import Message from './Message';
import News from './News';
import MyNavLink from '../../components/MyNavLink';
import {Redirect, Route, Switch} from "react-router-dom";

class Home extends Component {
    render() {
        // console.log("Home组件收到的props", this.props)
        return (
            <div>
                <h2>
                    Home
                </h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>

                    {/*注冊路由*/}
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;