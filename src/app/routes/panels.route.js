import React, { Component } from 'react';
import { Panel } from 'ui';

import styles from '../styles.styl';

export default class Panels extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Panels</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel outerStyle={{ marginBottom: 20 }}>
                        <p>Empty Panel</p>
                        <hr style={{ margin: '20px 0' }}/>
                        <pre>
                            {`import { Panel } from 'dayler-ui';

<Panel>
    <p>Empty Panel</p>
</Panel>`}
                        </pre>
                    </Panel>

                    <Panel title="panel with title" outerStyle={{ marginBottom: 20 }}>
                        <pre>
                            {`import { Panel } from 'dayler-ui';

<Panel title="panel with title">
    <p>Empty Panel</p>
</Panel>`}
                        </pre>
                    </Panel>

                    <Panel title="panel with title and icon" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <pre>
                            {`import { Panel } from 'dayler-ui';

<Panel title="panel with title and icon" icon="code">
    <p>Empty Panel</p>
</Panel>`}
                        </pre>
                    </Panel>
                </div>
            </div>
        );
    }
}
