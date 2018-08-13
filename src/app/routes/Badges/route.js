import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Badge, Panel } from 'dayler-ui';

import example from './examples/badges.ex';
import style from './style.styl';

export default class SetupRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Badges</span>
                <span className={style.description}>
                    Badges overview
                </span>
            </div>

            <Panel>
                <Badge title="Default" className={style.badge} />
                <Badge title="Default Long Text" className={style.badge} />
                <Badge title="Red" type="red" className={style.badge} />
                <Badge title="Green" type="green" className={style.badge} />
                <Badge title="Yellow" type="yellow" />
            </Panel>

            <Panel>
                <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                    {example}
                </SyntaxHighlighter>
            </Panel>
        </div>;
    }
}
