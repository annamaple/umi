import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import 'antd/dist/antd.css';

class App extends Component {

    state = {
        isFirst: true,
        isSearch: false,
        users: [],
        errorMessage: '',
    }

    updateState = (state) => {
        this.setState(state);
    }

    render() {
        const {updateState} = this;
        return (
            <div>
                <Header updateState={updateState}/>
                <Body {...this.state}/>
            </div>
        );
    }
}

export default App;