import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class List extends Component {
    render() {
        const {items, modifyItemState, delItem} = this.props;
        return (
            <ul className='todo-main'>
                {
                    items.map(item => {
                        return <Item key={item.id} item={item} modifyItemState={modifyItemState} delItem={delItem}/>
                    })
                }
            </ul>
        );
    }
}

export default List;
