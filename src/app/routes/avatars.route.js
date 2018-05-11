import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Avatar, Panel } from 'ui';

import styles from '../styles.styl';

export default class AvatarsRoute extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>
                        <h3>Avatars</h3>
                    </div>
                </div>
                <div className={styles.routeBody}>
                    <Panel title="Default" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <div style={{ display: 'inline-flex' }}>
                            <Avatar style={{ marginRight: 10 }} />
                            <Avatar style={{ marginRight: 10 }} image="https://cdn.dayler.io/images/avatar.svg" />
                            <Avatar style={{ marginRight: 10 }} name="Stephen Hawking" />
                            <Avatar style={{ marginRight: 10 }} name="Stephen Hawking" image="https://cdn.dayler.io/images/avatar.svg" />
                        </div>
                        <hr style={{ margin: '20px 0' }} />
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Avatar } from 'dayler-ui';\n\n<Avatar />\n<Avatar image="https://cdn.dayler.io/images/avatar.svg" />\n<Avatar name="Stephen Hawking" />\n<Avatar name="Stephen Hawking" image="https://cdn.dayler.io/images/avatar.svg" />`}
                        </SyntaxHighlighter>
                    </Panel>
                    <Panel title="Sized" icon="code">
                        <div style={{ display: 'inline-flex' }}>
                            <Avatar style={{ marginRight: 10 }} size={65} />
                            <Avatar style={{ marginRight: 10 }} image="https://cdn.dayler.io/images/avatar.svg" size={65} />
                            <Avatar style={{ marginRight: 10 }} name="Stephen Hawking" size={65} />
                            <Avatar style={{ marginRight: 10 }} name="Stephen Hawking" image="https://cdn.dayler.io/images/avatar.svg" size={65} />
                        </div>
                        <hr style={{ margin: '20px 0' }} />
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Avatar } from 'dayler-ui';\n\n<Avatar size={65} />\n<Avatar image="https://cdn.dayler.io/images/avatar.svg" size={65} />\n<Avatar name="Stephen Hawking" size={65} />\n<Avatar name="Stephen Hawking" image="https://cdn.dayler.io/images/avatar.svg" size={65} />`}
                        </SyntaxHighlighter>
                    </Panel>
                </div>
            </div>
        );
    }
}
