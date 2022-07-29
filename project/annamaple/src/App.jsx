import React, {Component} from 'react';
import Header from './components/Head';
import Body from './components/Body';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header>AnnaMaple</Header>
                <Body/>
            </div>
        );
    }
}

export default App;