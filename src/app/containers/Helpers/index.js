import React, { Component } from 'react';

import { Heading } from 'dayler-ui';

import style from './style';

export class HelpersContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Helpers</Heading>
        </div>;
    }
}
