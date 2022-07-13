import React, {Component} from 'react';
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className='todo-header'>
                <input type="text" placeholder='please input your todo item and press enter to confirm'/>
            </div>
        );
    }
}

export default Header;