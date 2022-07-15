import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Footer extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        clearAllDone: PropTypes.func.isRequired,
        checkAllItem: PropTypes.func.isRequired,
    }

    handleCheck = () => {
        const {checkAllItem} = this.props;
        return (e) => {
            // checked的值点调用change时已经改变了
            checkAllItem(e.target.checked);
        }
    }

    render() {
        const {items, clearAllDone} = this.props;
        let doneCount = items.reduce((pre, item) => pre + (item.done ? 1 : 0), 0);
        let checked = items.length > 0;
        items.forEach((item, i) => {
            if (!item.done) {
                checked = false;
            }
        });

        return (
            <div className='todo-footer'>
                <label htmlFor="">
                    <input type="checkbox" checked={checked} onChange={this.handleCheck()}/>
                    {checked ? '取消全选' : '选择全部'}
                </label>
                <span>
					<span>已完成 {doneCount}</span> / 全部 {items.length}
				</span>
                <button className='btn btn-danger' onClick={clearAllDone}>删除已完任务</button>
            </div>
        );
    }
}

export default Footer;
