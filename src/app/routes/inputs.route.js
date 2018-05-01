import React, { Component } from 'react';
import { Button, Input, Panel } from 'ui';

export default class Inputs extends Component {
    render() {
        return (
            <div className="route">
                <div className="route__title">Inputs</div>
                <div className="route__body">
                    <Panel title="Inputs" icon="code">
                        <Input placeholder="Text Input" groupStyle={{ marginBottom: 20 }} />
                        <Input placeholder="Text Input with Label" label="Input Label" groupStyle={{ marginBottom: 20 }} />
                        <hr style={{ margin: '20px 0' }}/>
                        <pre>
{`import { Input } from 'ui';

<Input placeholder="Text Input" />
<Input placeholder="Text Input with Label" label="Input Label" />
`}
                        </pre>
                    </Panel>
                    <br/>
                    <Panel title="Input with button" icon="code">
                        <div style={{ display: 'flex' }}>
                            <Input placeholder="Text Input with button" groupStyle={{ width: 200, marginRight: 10 }} />
                            <Button title="Submit" color="red" />
                        </div>
                        <hr style={{ margin: '20px 0' }}/>
                        <pre>
{`import { Button, Input } from 'ui';

<div style={{ display: 'flex' }}>
    <Input placeholder="Text Input with button"
        groupStyle={{ width: 200, marginRight: 10 }}
    />
    <Button title="Submit" color="red" />
</div>
`}
                        </pre>
                    </Panel>
                    <br/>
                    <Panel title="Input with button" icon="code">
                        <Input placeholder="Text Input with button" groupStyle={{ width: 300, marginBottom: 10 }} />
                        <Button title="Next" color="red" style={{ marginRight: 10 }}/>
                        <Button title="Cancel" />
                        <hr style={{ margin: '20px 0' }}/>
                        <pre>
{`import { Button, Input } from 'ui';

<Input placeholder="Text Input with button"
    groupStyle={{ width: 200, marginBottom: 10 }}
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
