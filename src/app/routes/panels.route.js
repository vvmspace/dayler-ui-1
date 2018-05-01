import React, { Component } from 'react';
import { Panel } from 'ui'

export default class Panels extends Component {
    render() {
        return (
            <div className="route">
                <div className="route__title">Panels</div>
                <div className="route__body">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',
                        gridColumnGap: '30px',
                        borderBottom: '1px solid #EEEEEE',
                        paddingBottom: 30,
                        marginBottom: 30
                    }}>
                        <Panel>
                            <p>Empty Panel</p>
                        </Panel>

                        <Panel title="Panel Title">
                            <p>Panel with title</p>
                        </Panel>

                        <Panel title="Panel Title" icon="settings">
                            <p>Panel with title and icon</p>
                        </Panel>
                    </div>
                    <Panel title="usage" icon="code">
                        <pre>
{`import { Panel } from 'ui';

<Panel title="Panel Title" icon="settings">
    ...
</Panel>`}
                        </pre>
                    </Panel>
                </div>
            </div>
        );
    }
}
