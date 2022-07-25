import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import PubSub from 'pubsub-js';
import {Input} from 'antd';

const {Search} = Input;

class Index extends Component {

    onSearch = async (value) => {
        // 发送请求前, 更新状态
        /*updateAppState({isSearch: true, isFirst: false});*/
        PubSub.publish('header', {isSearch: true, isFirst: false});
        if (value) {
            console.log(value);
            const url = `https://api.github.com/search/users?q=${value}`;

            /* // 使用axios发送
            axios.get(url).then(
                response => {
                    console.log(response.data.items);
                    // 请求成功后更新状态
                    /!*updateAppState({users: response.data.items, isSearch: false});*!/
                    PubSub.publish('header', {users: response.data.items, isSearch: false});
                },
                error => {
                    console.log(error);
                    // 请求失败后通知app更新状态
                    /!*updateAppState({errorMessage: error.message, isSearch: false});*!/
                    PubSub.publish('header', {errorMessage: error.message, isSearch: false});
                }
            )*/

            /*// 发送网络请求——未优化版本
            fetch(url).then(
                response => {
                    console.log("联系服务器成功")
                    return response.json();
                },
                error => {
                    console.log("联系服务器失败了");
                    return new Promise(() => {
                    })
                }
            ).then(
                response => console.log("data: ", response),
                error => console.log("error", error)
            )*/

            try {
                // 发送网络请求——优化版本
                const response = await fetch(url);
                const data = await response.json();
                console.log(data)
                PubSub.publish('header', {users: data.items, isSearch: false});
            } catch (e) {
                console.log("error", e)
                PubSub.publish('header', {errorMessage: e.message, isSearch: false});
            }

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