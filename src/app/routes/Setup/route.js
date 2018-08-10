import React, { Component } from 'react';

import { Panel, Section } from 'dayler-ui';

import style from './style.styl';

export default class SetupRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Setup</span>
                <span className={style.description}>
                    Application setup and basic requirements
                </span>
            </div>
            <Section title="Installation">
                <Panel>
                    ...
                </Panel>
            </Section>
        </div>;
    }
}
