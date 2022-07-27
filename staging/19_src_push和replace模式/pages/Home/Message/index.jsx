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

    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(message =>
                            <li key={message.id}>
                                {/*向路由组件传递params参数*/}
                                {/*<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>*/}

                                {/*向路由组件传递search参数*/}
                                {/*<Link*/}
                                {/*    to={`/home/message/detail/?id=${message.id}&title=${message.title}`}*/}
                                {/*>*/}
                                {/*    {message.title}*/}
                                {/*</Link>*/}

                                {/*向组件中传递state参数*/}
                                <Link
                                    replace
                                    to={{
                                        pathname: '/home/message/detail',
                                        state: {...message},
                                    }}
                                >
                                    {message.title}
                                </Link>
                            </li>)
                    }
                </ul>
                <hr/>
                {/*声明接受param参数*/}
                {/*<Route path='/home/message/detail/:id/:title' component={Detail}/>*/}

                {/*search参数无需声明接受*/}
                {/*<Route path='/home/message/detail' component={Detail}/>*/}

                {/*state参数无需声明接受，正常注册即可*/}
                <Route path={'/home/message/detail'} component={Detail}/>
            </div>
        );
    }
}

export default Index;