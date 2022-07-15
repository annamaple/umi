import React, {Component} from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {

    state = {
        items: [
            {id: '001', name: 'Listen Music', done: true},
            {id: '002', name: 'Watch Televion', done: false},
            {id: '003', name: 'Take Photos', done: true},
            {id: '004', name: 'Reading', done: false},
        ],
    }

    addItem = (item) => {
        const {items} = this.state;
        items.unshift(item);
        this.setState({items});
    }

    delItem = (id) => {
        const {items} = this.state;
        const newItems = items.filter(item => {
            return item.id !== id;
        })
        this.setState({items: newItems});
    }

    modifyItemState = (id, done) => {
        const {items} = this.state;
        const newItems = items.map((item) => {
            if (item.id === id) return {...item, done}
            else return item
        })
        this.setState({items: newItems})
    }

    checkAllItem = (done) => {
        const {items} = this.state;
        items.forEach((item, i) => {
            item.done = done;
        });
        this.setState({items});
    }

    clearAllDone = () => {
        const {items} = this.state;
        const newItems = items.filter(item => {
            return !item.done;
        })
        this.setState({items: newItems});
    }


    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addItem={this.addItem}/>
                    <List
                        items={this.state.items}
                        delItem={this.delItem}
                        modifyItemState={this.modifyItemState}
                    />
                    <Footer
                        items={this.state.items}
                        clearAllDone={this.clearAllDone}
                        checkAllItem={this.checkAllItem}
                    />
                </div>
            </div>
        );
    }
}

export default App;
