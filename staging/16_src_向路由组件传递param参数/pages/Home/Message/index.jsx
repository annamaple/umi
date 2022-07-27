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
                                <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                            </li>)
                    }
                </ul>
                <hr/>
                {/*声明接受param参数*/}
                <Route path='/home/message/detail/:id/:title' component={Detail}/>
            </div>
        );
    }
}

export default Index;