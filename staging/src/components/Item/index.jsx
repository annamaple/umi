import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Item extends Component {

    static propTypes = {
		item:PropTypes.object.isRequired,
		modifyItemState:PropTypes.func.isRequired,
		delItem:PropTypes.func.isRequired,
	}

    handleClick = (item) => {
        const {delItem} = this.props;
        return (e) => {
            delItem(item.id);
        }
    }

    handleCheck = (item) => {
        const {modifyItemState} = this.props;
        return (e) => {
            modifyItemState(item.id, !item.done);
        }
    }

    render() {
        const {item} = this.props;
        return (
            <li>
                <label htmlFor="">
                    <input type="checkbox" checked={item.done} onChange={this.handleCheck(item)}/>
                    <span>{item.name}</span>
                </label>
                <button className='btn btn-danger' onClick={this.handleClick(item)}>
                删除
                </button>
            </li>
        );
    }
}

export default Item;
