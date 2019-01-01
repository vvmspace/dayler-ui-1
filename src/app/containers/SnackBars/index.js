import React, { Component } from 'react';

import { Heading } from 'dayler-ui';

import style from './style';

export class SnackBarsContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Snack Bars</Heading>
        </div>;
    }
}
