import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import {Input} from 'antd';

const {Search} = Input;

class Index extends Component {

    static propTypes = {
        updateState: PropTypes.func.isRequired,
    }

    onSearch = (value) => {
        const {updateState} = this.props;
        updateState({isSearch: true, isFirst: false});
        if (value) {
            console.log(value);
            axios.get(`https://api.github.com/search/users?q=${value}`).then(
                response => {
                    console.log(response.data.items);
                    updateState({users: response.data.items, isSearch: false});
                },
                error => {
                    console.log(error);
                    updateState({errorMessage: error.message, isSearch: false});
                }
            )
        }
    };

    render() {
        return (
            <div>
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