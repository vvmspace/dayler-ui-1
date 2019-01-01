import React, { Component } from 'react';

import { Heading, Panel } from 'dayler-ui';

import style from './style';

export class PanelsContainer extends Component {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Panels</Heading>
            <Panel title="Panel">
                123
            </Panel>
        </div>;
    }
}
