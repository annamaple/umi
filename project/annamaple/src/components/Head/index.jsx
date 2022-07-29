import React, {Component} from 'react';
import {Center, Title} from "@mantine/core";

class Index extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <Center
                    style={{width: `100%`, height: 200, backgroundColor: '#879979', color: '#344A23'}}
                >
                    <div>
                        <Title order={1}>{children}</Title>
                    </div>
                </Center>
            </div>
        );
    }
}

export default Index;