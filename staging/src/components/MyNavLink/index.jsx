import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Index extends Component {


    render() {
        console.log(this.props);
        return (
            // 标签体中的内容是一个特殊的标签属性为children
            <NavLink activeClassName='xl' {...this.props} className="list-group-item"/>
        );
    }
}

export default Index;