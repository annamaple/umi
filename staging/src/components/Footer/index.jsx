import React, {Component} from 'react';
import './index.css'

class Footer extends Component {
    render() {
        return (
            <div className='todo-footer'>
                <label htmlFor="">
                    <input type="checkbox"/>
                    全选
                </label><span>
					<span>已完成 1</span> / 全部 12
				</span>
                <button className='btn btn-danger'>删除已完任务</button>
            </div>
        );
    }
}

export default Footer;