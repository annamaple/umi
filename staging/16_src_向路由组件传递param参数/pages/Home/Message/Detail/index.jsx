import React, {Component} from 'react';

class Index extends Component {

    contentArr = [
        {id: '01', content: '我是01的正文'},
        {id: '02', content: '我是02的正文'},
        {id: '03', content: '我是03的正文'},
    ]

    getDetailInfo = (id) => {
        const {contentArr} = this;
        return contentArr.find(content => content.id === id).content;
    }

    render() {
        console.log('detail', this.props);
        // 接受param参数
        const {id, title} = this.props.match.params;
        return (
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{this.getDetailInfo(id)}</li>
                </ul>
            </div>
        );
    }
}

export default Index;