import React, { Component } from 'react';

import { Badge, Panel, Section } from 'dayler-ui';

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

            <Section title="Colors" styles={{ body: style.colors }}>
                <div className={`${style.color} ${style.dark}`}>
                    <span className={style.colorTitle}>$dark</span>
                    <span className={style.colorValue}>#585c67</span>
                </div>

                <div className={`${style.color} ${style.gray}`}>
                    <span className={style.colorTitle}>$gray</span>
                    <span className={style.colorValue}>#777f83</span>
                </div>

                <div className={`${style.color} ${style.red}`}>
                    <span className={style.colorTitle}>$red</span>
                    <span className={style.colorValue}>#e14839</span>
                </div>

                <div className={`${style.color} ${style.green}`}>
                    <span className={style.colorTitle}>$green</span>
                    <span className={style.colorValue}>#66c85f</span>
                </div>

                <div className={`${style.color} ${style.yellow}`}>
                    <span className={style.colorTitle}>$yellow</span>
                    <span className={style.colorValue}>#f0b458</span>
                </div>
            </Section>

            <Section title="Badges">
                <Badge title="Default" style={{ marginRight: 10 }} />
                <Badge title="Default Long Text" style={{ marginRight: 10 }} />
                <Badge title="Red" type="red" style={{ marginRight: 10 }} />
                <Badge title="Green" type="green" style={{ marginRight: 10 }} />
                <Badge title="Yellow" type="yellow" />
            </Section>

            <Section title="Panels">
                <Panel>
                    Content
                </Panel>
                <Panel title="Panel Title">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather" styles={{ body: style.panel }}>
                    Styled content
                </Panel>
            </Section>
            <Section title="Panels">
                <Panel>
                    Content
                </Panel>
                <Panel title="Panel Title">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather" styles={{ body: style.panel }}>
                    Styled content
                </Panel>
            </Section>
            <Section title="Panels">
                <Panel>
                    Content
                </Panel>
                <Panel title="Panel Title">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather" styles={{ body: style.panel }}>
                    Styled content
                </Panel>
            </Section>
            <Section title="Panels">
                <Panel>
                    Content
                </Panel>
                <Panel title="Panel Title">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather">
                    Content
                </Panel>
                <Panel title="Panel with Title and icon" icon="feather" styles={{ body: style.panel }}>
                    Styled content
                </Panel>
            </Section>
        </div>;
    }
}
