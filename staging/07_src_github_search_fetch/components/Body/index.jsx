import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Typography, Card, Image} from 'antd';
import PubSub from 'pubsub-js';
import './index.css'

const {Meta} = Card;

class Index extends Component {

    state = {
        isFirst: true,
        isSearch: false,
        users: [],
        errorMessage: '',
    }

    componentDidMount() {
        this.headerToken = PubSub.subscribe('header', (_, data) => {
            console.log("Body--", data);
            this.setState(data);
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.headerToken);
    }

    getTypography = (content) => {
        return (
            <Typography.Title
                editable={false}
                level={2}
                style={{
                    marginTop: 20,
                    width: window.innerWidth * 0.5,
                }}
            >
                {content}
            </Typography.Title>
        )
    }

    parseUser = (user) => {
        const {login, html_url, avatar_url} = user;
        return (
            <Card
                className='card'
                key={login}
                hoverable
                style={{
                    width: 240,
                }}
                cover={<Image preview={false} alt={login} src={avatar_url}/>}
            >
                <Meta title={login} description={html_url}/>
            </Card>
        )
    }

    render() {
        const {users, isFirst, isSearch, errorMessage} = this.state;
        return (
            <div
                className='cards'
            >
                {isFirst ? this.getTypography('please input username to search') :
                    isSearch ? this.getTypography('searching...') :
                        errorMessage ? this.getTypography(errorMessage) :
                            users.map(user => (this.parseUser(user)))}
            </div>
        );
    }
}

export default Index;