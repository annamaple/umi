import React, {Component} from 'react';
import {Button, DatePicker} from "antd";
import {QqOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

class App extends Component {
    render() {
        return (
            <div>
                App...
                <Button type={'link'}>antd按钮</Button>
                <hr/>
                <QqOutlined/>
                <RangePicker/>
            </div>
        );
    }
}

export default App;