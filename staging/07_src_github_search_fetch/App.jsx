import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import 'antd/dist/antd.css';

class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;