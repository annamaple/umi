import React, {Component} from 'react';
import './index.css'

class Item extends Component {
    render() {
        return (
            <li>
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span>anna</span>
                </label>
                <button className='btn btn-danger'>点我</button>
            </li>
        );
    }
}

export default Item;