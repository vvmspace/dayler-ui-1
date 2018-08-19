import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { CheckedBadge, Badge, Panel, Section } from 'dayler-ui';

import * as examples from './examples';
import style from './style.styl';

export default class SetupRoute extends Component {
    checkedBadges = [{
        id: 0,
        title: 'Dark',
        type: 'dark',
    }, {
        id: 1,
        title: 'Red',
        type: 'red',
    }, {
        id: 2,
        title: 'Green',
        type: 'green',
    }, {
        id: 3,
        title: 'Yellow',
        type: 'yellow',
    }];

    state = {
        checkedBadge: 0,
    };

    handleBadgeClick = badge => () => {
        this.setState({
            checkedBadge: badge.id,
        });
    }

    render() {
        const { checkedBadge } = this.state;

        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Badges</span>
                <span className={style.description}>
                    Badges overview
                </span>
            </div>

            <Section title="Default Badges">
                <Panel>
                    <Badge title="Dark" className={style.badge} />
                    <Badge title="Dark Long Text" className={style.badge} />
                    <Badge title="Red" type="red" className={style.badge} />
                    <Badge title="Green" type="green" className={style.badge} />
                    <Badge title="Yellow" type="yellow" />
                </Panel>

                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.defaultBadges}
                    </SyntaxHighlighter>
                </Panel>
            </Section>

            <Section title="Checked Badges">
                <Panel>
                    {this.checkedBadges.map(badge => (
                        <CheckedBadge key={badge.id}
                            title={badge.title}
                            type={badge.type}
                            className={style.badge}
                            checked={checkedBadge === badge.id}
                            onClick={this.handleBadgeClick(badge)}
                        />
                    ))}
                </Panel>

                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.checkedBadges}
                    </SyntaxHighlighter>
                </Panel>
            </Section>
        </div>;
    }
}
