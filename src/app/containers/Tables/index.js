import React, { Component } from 'react';

import { Heading } from 'dayler-ui';

import style from './style';

export class TablesContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Tables</Heading>
        </div>;
    }
}
