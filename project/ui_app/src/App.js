import MyNavLink from './components/MyNavLink';
import Header from './components/Header';
import './App.css';

import React, {Component} from 'react';
import {IconActivity, IconFingerprint, IconGauge} from "@tabler/icons";

class App extends Component {

  state = {
    data: [
      {
        icon: IconGauge,
        label: 'Dashboard',
        // description: 'Item with description'
      },
      {
        icon: IconFingerprint,
        label: 'Security',
        // rightSection: <IconChevronRight size={14} stroke={1.5}/>,
      },
      {
        icon: IconActivity,
        label: 'Activity'
      },
    ],
    activeIndex: 2,
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <MyNavLink {...this.state}/>
      </div>
    );
  }
}

export default App;
