import React, {Component} from 'react';

class Index extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.history.push('/home/message')
        }, 3000)
    }

    componentWillUnmount() {
        console.log('timer close');
        clearInterval(this.timer);
    }

    render() {
        const nums = [1, 2, 3];
        return (
            <div>
                <ul>
                    {nums.map(num => <li key={num}>news-{num}</li>)}
                </ul>
            </div>
        );
    }
}

export default Index;