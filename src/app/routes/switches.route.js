import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Checkbox, Switch, Panel } from 'ui';

import styles from '../styles.styl';

export default class Switches extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Switches</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel title="checkboxes" icon="check" innerStyle={{ display: 'grid', gridTemplateColumns: '100px auto' }} outerStyle={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Checkbox title="Default" outerStyle={{ marginBottom: 20 }} />
                            <Checkbox title="Red" color="red" outerStyle={{ marginBottom: 20 }} />
                            <Checkbox title="Green" color="green" outerStyle={{ marginBottom: 20 }} />
                            <Checkbox title="Yellow" color="yellow" outerStyle={{ marginBottom: 20 }} />
                            <Checkbox title="Dark" color="dark" outerStyle={{ marginBottom: 20 }} />
                        </div>
                        <div style={{ borderLeft: '1px solid #EEE', paddingLeft: 30, marginLeft: 10 }}>
                            <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                                {`import { Checkbox } from 'dayler-ui';\n\n<Checkbox title="Default" />\n<Checkbox title="Red" color="red" />\n<Checkbox title="Green" color="green" />\n<Checkbox title="Yellow" color="yellow" />\n<Checkbox title="Dark" color="dark" />`}
                            </SyntaxHighlighter>
                        </div>
                    </Panel>
                    <Panel title="switches" icon="toggle-left" innerStyle={{ display: 'grid', gridTemplateColumns: '100px auto', marginBottom: 20 }}  outerStyle={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Switch outerStyle={{ marginBottom: 20 }} />
                            <Switch color="red" outerStyle={{ marginBottom: 20 }} />
                            <Switch color="green" outerStyle={{ marginBottom: 20 }} />
                            <Switch color="yellow" outerStyle={{ marginBottom: 20 }} />
                            <Switch color="dark" outerStyle={{ marginBottom: 20 }} />
                        </div>
                        <div style={{ borderLeft: '1px solid #EEE', paddingLeft: 30, marginLeft: 10 }}>
                            <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                                {`import { Switch } from 'dayler-ui';\n\n<Switch title="Default" />\n<Switch title="Red" color="red" />\n<Switch title="Green" color="green" />\n<Switch title="Yellow" color="yellow" />\n<Switch title="Dark" color="dark" />`}
                            </SyntaxHighlighter>
                        </div>
                    </Panel>
                </div>
            </div>
        );
    }
}
