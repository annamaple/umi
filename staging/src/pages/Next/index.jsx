import React, {Component} from 'react';
import {Button} from '@nextui-org/react';
import {Text} from '@nextui-org/react';
import Color from './Color';


class Index extends Component {

    state = {
        head: 'Next-UI',
        display: 'none',
    }

    handleClick = () => {
        let {display} = this.props;
        if (display === 'none') {
            display = '';
        } else{
            display = 'none';
        }
        this.setState({display});
    }

    render() {
        const {head, display} = this.state;

        return (
            <div>
                <Text h1>{head}</Text>
                <Button children={'点我'} onClick={this.handleClick}/>
                <div style={{display}}><Color/></div>
            </div>
        );
    }
}

export default Index;