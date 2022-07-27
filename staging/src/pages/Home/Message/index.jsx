import React, {Component} from 'react';
import Detail from './Detail';
import {Link, Route} from "react-router-dom";

class Index extends Component {
    state = {
        messageArr: [
            {
                id: '01',
                title: '消息01',
            },
            {
                id: '02',
                title: '消息02',
            },
            {
                id: '03',
                title: '消息03',
            },
        ],
    }

    replaceShow = (message) => {
        return () => {
            // replace跳转+param参数
            this.props.history.replace(`/home/message/detail/${message.id}/${message.title}`);

            // replace跳转+search参数
            // this.props.history.replace(`/home/message/detail/?id=${message.id}&title=${message.title}`);

            // replace跳转+state参数
            // this.props.history.replace('/home/message/detail', message);
        }

    };
    pushShow = (message) => {
        return () => {
            // push跳转+param参数
            this.props.history.push(`/home/message/detail/${message.id}/${message.title}`);

            // push跳转+search参数
            // this.props.history.push(`/home/message/detail/?id=${message.id}&title=${message.title}`);

            // push跳转+state参数
            // this.props.history.push('/home/message/detail', message);
        }
    };

    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(message =>
                            <li key={message.id}>
                                {/*向路由组件传递params参数*/}
                                <Link replace
                                      to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                                &nbsp
                                <button onClick={this.replaceShow(message)}>replace查看</button>
                                <button onClick={this.pushShow(message)}>push查看</button>


                                {/*向路由组件传递search参数*/}
                                {/*<Link*/}
                                {/*    to={`/home/message/detail/?id=${message.id}&title=${message.title}`}*/}
                                {/*>*/}
                                {/*    {message.title}*/}
                                {/*</Link>*/}

                                {/*向组件中传递state参数*/}
                                {/*<Link*/}
                                {/*    replace*/}
                                {/*    to={{*/}
                                {/*        pathname: '/home/message/detail',*/}
                                {/*        state: {...message},*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    {message.title}*/}
                                {/*</Link>*/}
                            </li>)
                    }
                </ul>
                <hr/>
                {/*声明接受param参数*/}
                <Route path='/home/message/detail/:id/:title' component={Detail}/>

                {/*search参数无需声明接受*/}
                {/*<Route path='/home/message/detail' component={Detail}/>*/}

                {/*state参数无需声明接受，正常注册即可*/}
                {/*<Route path={'/home/message/detail'} component={Detail}/>*/}

                <button onClick={this.back}>后退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.forward}>go</button>
            </div>
        );
    }

    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

    go = () => {
        // 正表示前进 负数表示后退 数值表示几步
        this.props.history.go(2);
    }
}

export default Index;