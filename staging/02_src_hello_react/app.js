// 创建外壳组件  使用{}取的时分别暴露的值
import React, {Component} from 'react';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

