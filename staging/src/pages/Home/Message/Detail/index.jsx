import React, {Component} from 'react';

class Index extends Component {

    contentArr = [
        {id: '01', content: '我是01的正文'},
        {id: '02', content: '我是02的正文'},
        {id: '03', content: '我是03的正文'},
    ]

    getDetailInfo = (id) => {
        if (!id) {
            return '';
        }
        const {contentArr} = this;
        return contentArr.find(content => content.id === id).content || {};
    }

    render() {
        console.log('detail', this.props);
        // 接受param参数
        // const {id, title} = this.props.match.params;

        // 接受search参数
        // const {search} = this.props.location;
        // 使用querystring解析search参数
        // console.log(search, qs.parse(search.slice(1)));
        // const {id, title} = qs.parse(search.slice(1));

        // 接受state参数
        const {id, title} = this.props.location.state || {};
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{this.getDetailInfo(id)}</li>
                </ul>
            </div>
        );
    }
}

export default Index;