import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import 'antd/dist/antd.css';

class App extends Component {


    render() {
        const {updateState} = this;
        return (
            <div>
                <Header updateAppState={updateState}/>
                <Body {...this.state}/>
            </div>
        );
    }
}

export default App;