import React, { Component } from 'react';
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
                        <pre>
{`import { Input } from 'dayler-ui';

<Input placeholder="Text Input" />
<Input placeholder="Text Input with Label" label="Input Label" />
`}
                        </pre>
                    </Panel>
                    <Panel title="Input with button" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex' }}>
                            <Input placeholder="Text Input with button" outerStyle={{ width: 200, marginRight: 10 }} />
                            <Button title="Submit" color="red" />
                        </div>
                        <hr style={{ margin: '20px 0' }}/>
                        <pre>
{`import { Button, Input } from 'dayler-ui';

<div style={{ display: 'flex' }}>
    <Input placeholder="Text Input with button"
        outerStyle={{ width: 200, marginRight: 10 }}
    />
    <Button title="Submit" color="red" />
</div>
`}
                        </pre>
                    </Panel>
                    <Panel title="Input with button" icon="code">
                        <Input placeholder="Text Input with button" outerStyle={{ width: 300, marginBottom: 10 }} />
                        <Button title="Next" color="red" style={{ marginRight: 10 }}/>
                        <Button title="Cancel" />
                        <hr style={{ margin: '20px 0' }}/>
                        <pre>
{`import { Button, Input } from 'dayler-ui';

<Input placeholder="Text Input with button"
    outerStyle={{ width: 200, marginBottom: 10 }}
/>
<Button title="Submit" color="red" />
`}
                        </pre>
                    </Panel>
                </div>
            </div>
        );
    }
}
