import React, { Component } from 'react';

import { Heading } from 'dayler-ui';

import style from './style.styl';

export class ButtonsContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Buttons</Heading>
        </div>;
    }
}
