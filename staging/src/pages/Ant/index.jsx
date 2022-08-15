import React, {Component} from 'react';
import {Button, DatePicker} from "antd";
import {QqOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;
class Index extends Component {
    render() {
        return (
            <div>
                <QqOutlined/>
                <Button/>
                <RangePicker/>
            </div>
        );
    }
}

export default Index;