import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Button, Panel, Radio, Snackbar } from 'ui';

import styles from '../styles.styl';

export default class SnackbarRoute extends Component {
    state = {
        snackPosition: 'NE',
        key: 1,
    };

    handleSnackPosition = event => {
        const { value } = event.target;

        this.setState({
            snackPosition: value,
        });
    };

    handleAlert = type => () => {
        const { key } = this.state;

        this.snackBar(`Snackbar Example ${key}`, { type })
            .then(() => this.setState({ key: key + 1 }));
    }

    render() {
        const { snackPosition } = this.state;

        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Snackbar</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel title="snackbar" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <Snackbar onMount={referance => this.snackBar = referance}
                            duration={4000}
                            node="root"
                            position={snackPosition}
                            type="dark"
                        />

                        <div style={{ marginBottom: 20 }}>
                            <Radio checked={snackPosition === "NE"}
                                color="red" outerStyle={{ marginRight: 20 }}
                                onChange={this.handleSnackPosition}
                                title="Top Right"
                                value="NE"
                            />
                            <Radio checked={snackPosition === "N"}
                                color="red" outerStyle={{ marginRight: 20 }}
                                onChange={this.handleSnackPosition}
                                title="Top"
                                value="N"
                            />
                            <Radio checked={snackPosition === "NW"}
                                color="red" outerStyle={{ marginRight: 20 }}
                                onChange={this.handleSnackPosition}
                                title="Top Left"
                                value="NW"
                            />
                            <Radio checked={snackPosition === "S"}
                                color="red" outerStyle={{ marginRight: 20 }}
                                onChange={this.handleSnackPosition}
                                title="Bottom"
                                value="S"
                            />
                            <Radio checked={snackPosition === "SW"}
                                color="red" outerStyle={{ marginRight: 20 }}
                                onChange={this.handleSnackPosition}
                                title="Bottom Left"
                                value="SW"
                            />
                            <Radio checked={snackPosition === "SE"}
                                color="red" outerStyle={{ marginRight: 20 }}
                                onChange={this.handleSnackPosition}
                                title="Bottom Right"
                                value="SE"
                            />
                        </div>
                        <Button title="Default" onClick={this.handleAlert('dark')} style={{ marginRight: 10 }} />
                        <Button title="Red" color="red" onClick={this.handleAlert('red')} style={{ marginRight: 10 }} />
                        <Button title="Green" color="green" onClick={this.handleAlert('green')} style={{ marginRight: 10 }} />
                        <Button title="Yellow" color="yellow" onClick={this.handleAlert('yellow')} style={{ marginRight: 10 }} />
                    </Panel>
                    <Panel title="Usage" icon="code">
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import React, { Component } from 'react';\nimport { Button, Snackbar } from 'dayler-ui';\n\nexport class SnackBarExample extends Component {\n    handleAlert = () => {\n        const options = {\n            type: 'red', // default: 'dark', should be one of ['dark', 'red', 'green', 'yellow']\n            duration: 4000, // default 4000ms\n        }\n\n        this.snackBar('Snackbar title', options);\n    }\n\n    render() {\n        return (\n            <div>\n                <Snackbar onMount={referance => this.snackBar = referance}\n                    duration={4000}\n                    node="root"\n                    position="NE"\n                    type="dark"\n                />\n\n                <Button title="Show Snackbar" onClick={this.handleAlert} />\n            </div>\n        );\n    }\n\n}`}
                        </SyntaxHighlighter>
                    </Panel>
                </div>
            </div>
        );
    }
}
