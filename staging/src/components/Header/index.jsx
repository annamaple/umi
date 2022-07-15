import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

class Header extends Component {

    static propTypes = {
        addItem: PropTypes.func.isRequired,
    }

    // 处理键盘的回调事件
    handleKeyUp = (e) => {
        const {key, target} = e;
        const value = e.target.value.trim();
        const {addItem} = this.props;
        if (key === 'Enter') {
            if (value === '')
                // 事项为空不处理
                return;
            }
            const item = {id: nanoid(), name: value, done: false};
            addItem(item);
            // 清空出入栏
            target.value = '';
        }
    }

    render() {
        return (
            <div className='todo-header'>
                <input
                    type="text"
                    placeholder='please input your todo item and press enter to confirm'
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
}

export default Header;
