import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Link } from 'react-router-dom';
import { IconButton, Button, Panel } from 'ui';

import styles from '../styles.styl';

export default class ButtonsRoute extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>
                        <h3>Buttons</h3>
                    </div>
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
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Button } from 'dayler-ui';\n\n<Button title="Next" />\n<Button title="Next" color="dark" />\n<Button title="Next" color="red" />\n<Button title="Next" color="green" />\n<Button title="Next" color="yellow" />`}
                        </SyntaxHighlighter>
                    </Panel>
                    <Panel title="disabled button" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            disabled={true}
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="dark"
                            disabled={true}
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="red"
                            disabled={true}
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="green"
                            disabled={true}
                        />
                        <Button style={{ marginRight: 10 }}
                            title="Next"
                            color="yellow"
                            disabled={true}
                        />
                        <hr style={{ margin: '20px 0' }} />
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Button } from 'dayler-ui';\n\n<Button title="Next" disabled={true} />\n<Button title="Next" color="dark" disabled={true} />\n<Button title="Next" color="red" disabled={true} />\n<Button title="Next" color="green" disabled={true} />\n<Button title="Next" color="yellow" disabled={true} />`}
                        </SyntaxHighlighter>
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
                        <IconButton style={{ marginRight: 10 }}
                            color="red"
                            icon="crop"
                            title="Apply"
                        />
                        <hr style={{ margin: '20px 0' }} />
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { IconButton } from 'dayler-ui';\n\n\n<IconButton icon="code" />\n<IconButton icon="cloud-off" color="dark" />\n<IconButton icon="chevrons-right" color="red" />\n<IconButton icon="printer" title="print" color="green" />\n<IconButton icon="chevrons-right" title="Next" color="yellow" />`}
                        </SyntaxHighlighter>
                        <pre>

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
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import { Button, IconButton } from 'dayler-ui';\nimport { Link } from 'react-router-dom';\n\n<Link to="/buttons">\n    <IconButton icon="hash" />\n</Link>\n\n<Link to="/buttons">\n    <IconButton icon="share" color="dark" />\n</Link>\n\n<Link to="/buttons">\n    <IconButton icon="slack" color="red" />\n</Link>\n\n<Link to="/buttons">\n    <IconButton icon="shopping-cart" title="Buy" color="green" />\n</Link>\n\n<Link to="/buttons">\n    <Button title="Next" color="yellow" />\n</Link>`}
                        </SyntaxHighlighter>
                        <pre>

                        </pre>
                    </Panel>
                </div>
            </div>
        );
    }
}
