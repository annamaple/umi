import React, {Component} from 'react';

class Index extends Component {
    render() {
        const nums = ['a', 'b', 'c', 'd'];
        return (
            <div>
                <ul>
                    {nums.map(num => <li key={num}>message--{num}</li>)}
                </ul>
            </div>
        );
    }
}

export default Index;