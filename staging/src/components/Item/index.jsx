import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Item extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        modifyItemState: PropTypes.func.isRequired,
        delItem: PropTypes.func.isRequired,
    }

    state = {
        // 处理鼠标移入显示
        mouseFlag: false,
    }

    handleClick = (item) => {
        const {delItem} = this.props;
        return () => {
            delItem(item.id);
        }
    }

    handleCheck = (item) => {
        const {modifyItemState} = this.props;
        return () => {
            modifyItemState(item.id, !item.done);
        }
    }

    handleMouse = (mouseFlag) => {
        return () => {
            this.setState({mouseFlag})
        }
    }

    render() {
        const {item} = this.props;
        const {mouseFlag} = this.state;
        return (
            <li onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
                style={{backgroundColor: mouseFlag ? '#add' : '#EEE'}}
            >
                <label htmlFor="">
                    <input type="checkbox" checked={item.done} onChange={this.handleCheck(item)}/>
                    <span>{item.name}</span>
                </label>
                <button
                    className='btn btn-danger'
                    onClick={this.handleClick(item)}
                    style={{display: mouseFlag ? 'block' : 'none'}}
                >
                    删除
                </button>
            </li>
        );
    }
}

export default Item;
