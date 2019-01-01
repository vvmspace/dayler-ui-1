import React, { PureComponent } from 'react';

import { Heading } from 'dayler-ui';

import style from './style.styl';

export class IntroductionContainer extends PureComponent {
    render() {
        return <div className={style.container}>
            <Heading h1 className={style.title}>Dayler UI</Heading>
        </div>;
    }
}
