import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Index extends Component {

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

    render() {
        // console.log('Header 组件收到的props：', this.props)
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-offset-2 col-xs-8'>
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div style={{textAlign:'center',}}>
                    <button onClick={this.back}>后退</button>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.forward}>go</button>
                </div>
            </div>
        );
    }
}

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
export default withRouter(Index);