import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Panel } from 'dayler-ui';

import style from './style.styl';

export default class PanelsRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Panels</span>
                <span className={style.description}>
                    Panels overview
                </span>
            </div>

            <Panel styles={{ body: style.panel }}>
                <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                    {`import { Panel } from 'dayler-ui';\n\n<Panel>\n    ...\n</Panel>`}
                </SyntaxHighlighter>
            </Panel>
            <Panel styles={{ body: style.panel }} title="Panel Title">
                <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                    {`import { Panel } from 'dayler-ui';\n\n<Panel title="Panel Title">\n    ...\n</Panel>`}
                </SyntaxHighlighter>
            </Panel>
            <Panel styles={{ body: style.panel }} title="Panel with Title and icon" icon="feather">
                <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                    {`import { Panel } from 'dayler-ui';\n\n<Panel title="Panel with Title and icon" icon="feather">\n    ...\n</Panel>`}
                </SyntaxHighlighter>
            </Panel>
        </div>;
    }
}
