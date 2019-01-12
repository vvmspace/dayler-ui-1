import React, { Component } from 'react';

import { Heading } from 'dayler-ui';

import style from './style.styl';

export class DateContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Date</Heading>
        </div>;
    }
}
