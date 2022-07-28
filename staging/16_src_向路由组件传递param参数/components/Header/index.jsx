import React, {Component} from 'react';

class Index extends Component {
    render() {
        // console.log('Header 组件收到的props：', this.props)
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-offset-2 col-xs-8'>
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;