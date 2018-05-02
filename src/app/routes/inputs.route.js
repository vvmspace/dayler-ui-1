import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Button, Input, Panel } from 'ui';

import styles from '../styles.styl';

export default class Inputs extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Inputs</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel title="Inputs" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <Input placeholder="Text Input" outerStyle={{ marginBottom: 20 }} />
                        <Input placeholder="Text Input with Label" label="Input Label" outerStyle={{ marginBottom: 20 }} />
                        <hr style={{ margin: '20px 0' }}/>
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Input } from 'dayler-ui';\n\n<Input placeholder="Text Input" />\n<Input placeholder="Text Input with Label" label="Input Label" />`}
                        </SyntaxHighlighter>
                    </Panel>
                    <Panel title="Input with button" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex' }}>
                            <Input placeholder="Text Input with button" outerStyle={{ width: 200, marginRight: 10 }} />
                            <Button title="Submit" color="red" />
                        </div>
                        <hr style={{ margin: '20px 0' }}/>
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Button, Input } from 'dayler-ui';\n\n<div style={{ display: 'flex' }}>\n    <Input placeholder="Text Input with button"\n        outerStyle={{ width: 200, marginRight: 10 }}\n    />\n    <Button title="Submit" color="red" />\n</div>`}
                        </SyntaxHighlighter>
                    </Panel>
                    <Panel title="Input with button" icon="code">
                        <Input placeholder="Text Input with button" outerStyle={{ width: 300, marginBottom: 10 }} />
                        <Button title="Next" color="red" style={{ marginRight: 10 }}/>
                        <Button title="Cancel" />
                        <hr style={{ margin: '20px 0' }}/>
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Button, Input } from 'dayler-ui';\n<Input placeholder="Text Input with button"\n    outerStyle={{ width: 200, marginBottom: 10 }}\n/>\n<Button title="Submit" color="red" />`}
                        </SyntaxHighlighter>
                    </Panel>
                </div>
            </div>
        );
    }
}
