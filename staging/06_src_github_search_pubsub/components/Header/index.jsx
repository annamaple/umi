import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import PubSub from 'pubsub-js';
import {Input} from 'antd';

const {Search} = Input;

class Index extends Component {

    onSearch = (value) => {
        // 发送请求前, 更新状态
        /*updateAppState({isSearch: true, isFirst: false});*/
        PubSub.publish('header', {isSearch: true, isFirst: false});
        if (value) {
            console.log(value);
            axios.get(`https://api.github.com/search/users?q=${value}`).then(
                response => {
                    console.log(response.data.items);
                    // 请求成功后更新状态
                    /*updateAppState({users: response.data.items, isSearch: false});*/
                    PubSub.publish('header', {users: response.data.items, isSearch: false});
                },
                error => {
                    console.log(error);
                    // 请求失败后通知app更新状态
                    /*updateAppState({errorMessage: error.message, isSearch: false});*/
                    PubSub.publish('header', {errorMessage: error.message, isSearch: false});
                }
            )
        }
    };

    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={this.onSearch}
                    style={{
                        width: 400,
                    }}
                />
            </div>
        );
    }
}

export default Index;