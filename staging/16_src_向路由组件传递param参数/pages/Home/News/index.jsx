import React, {Component} from 'react';

class Index extends Component {
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