import React, { PureComponent } from 'react';

import { Heading } from 'dayler-ui';

import style from './style.styl';

export class TypingsContainer extends PureComponent {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Typings</Heading>
        </div>;
    }
}
