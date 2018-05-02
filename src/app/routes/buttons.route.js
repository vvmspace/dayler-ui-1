import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Button, Panel } from 'ui';

import styles from '../styles.styl';

export default class Buttons extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Buttons</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel title="default button" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="dark"
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="red"
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="green"
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="yellow"
                        />
                        <hr style={{ margin: '20px 0' }} />
                        <pre>
{`
import { Button } from 'ui';

<Button title="Next" />
<Button title="Next" color="dark" />
<Button title="Next" color="red" />
<Button title="Next" color="green" />
<Button title="Next" color="yellow" />`}
                        </pre>
                    </Panel>
                    <Panel title="icon button" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <IconButton style={{ marginRight: 10 }}
                            icon="code"
                        />
                        <IconButton style={{ marginRight: 10 }}
                            icon="cloud-off"
                            color="dark"
                        />
                        <IconButton style={{ marginRight: 10 }}
                            icon="chevrons-right"
                            color="red"
                        />
                        <IconButton style={{ marginRight: 10 }}
                            icon="printer"
                            title="print"
                            color="green"
                        />
                        <IconButton style={{ marginRight: 10 }}
                            icon="chevrons-right"
                            title="Next"
                            color="yellow"
                        />
                        <hr style={{ margin: '20px 0' }} />
                        <pre>
{`
import { IconButton } from 'ui';

<IconButton icon="code" />
<IconButton icon="cloud-off" color="dark" />
<IconButton icon="chevrons-right" color="red" />
<IconButton icon="printer" title="print" color="green" />
<IconButton icon="chevrons-right" title="Next" color="yellow" />`}
                        </pre>
                    </Panel>
                    <Panel title="link button" icon="code">
                        <Link to="/buttons"><IconButton style={{ marginRight: 10 }}
                            icon="hash"
                        /></Link>
                        <Link to="/buttons"><IconButton style={{ marginRight: 10 }}
                            icon="share"
                            color="dark"
                        /></Link>
                        <Link to="/buttons"><IconButton style={{ marginRight: 10 }}
                            icon="slack"
                            color="red"
                        /></Link>
                        <Link to="/buttons"><IconButton style={{ marginRight: 10 }}
                            icon="twitter"
                            title="Twitter"
                            color="green"
                        /></Link>
                        <Link to="/buttons"><Button style={{ marginRight: 10 }}
                            title="Next"
                            color="yellow"
                        /></Link>
                        <hr style={{ margin: '20px 0' }} />
                        <pre>
{`import { Button, IconButton } from 'ui';
import { Link } from 'react-router-dom';

<Link to="/buttons">
    <IconButton icon="hash" />
</Link>

<Link to="/buttons">
    <IconButton icon="share" color="dark" />
</Link>

<Link to="/buttons">
    <IconButton icon="slack" color="red" />
</Link>

<Link to="/buttons">
    <IconButton icon="shopping-cart" title="Buy" color="green" />
</Link>

<Link to="/buttons">
    <Button title="Next" color="yellow" />
</Link>`}
                        </pre>
                    </Panel>
                </div>
            </div>
        );
    }
}
