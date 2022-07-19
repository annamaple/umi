import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Typography, Card, Image} from 'antd';
import './index.css'

const {Meta} = Card;

class Index extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        isFirst: PropTypes.bool,
        isSearch: PropTypes.bool,
        errorMessage: PropTypes.string,
    }

    getTypography = (content) => {
        return (
            <Typography.Title
                editable={false}
                level={2}
                style={{
                    marginTop: 20,
                    marginLeft: 0,
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
        const {users, isFirst, isSearch, errorMessage} = this.props;
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