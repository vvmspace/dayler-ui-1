import React, { Component } from 'react';

import { Heading } from 'dayler-ui';

import style from './style';

export class TextInputsContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Text Inputs</Heading>
        </div>;
    }
}
