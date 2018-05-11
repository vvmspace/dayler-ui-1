import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Checkbox, Switch, Panel, Radio } from 'ui';

import styles from '../styles.styl';

export default class SwitchesRoute extends Component {
    state = {
        checkedRadio: "1",
    }

    handleRadioChange = event => {
        const { value } = event.target;
        this.setState({ checkedRadio: value });
    };

    render() {
        const { checkedRadio } = this.state;

        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>
                        <h3>Switches</h3>
                    </div>
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
                    <Panel title="radio" icon="radio" innerStyle={{ display: 'grid', gridTemplateColumns: '100px auto', marginBottom: 20 }}  outerStyle={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Radio checked={checkedRadio === "1"}
                                title="Default"
                                outerStyle={{ marginBottom: 20 }}
                                onChange={this.handleRadioChange}
                                value="1"
                            />
                            <Radio checked={checkedRadio === "2"}
                                title="Red"
                                color="red" outerStyle={{ marginBottom: 20 }}
                                onChange={this.handleRadioChange}
                                value="2"
                            />
                            <Radio checked={checkedRadio === "3"}
                                title="Green"
                                color="green" outerStyle={{ marginBottom: 20 }}
                                onChange={this.handleRadioChange}
                                value="3"
                            />
                            <Radio checked={checkedRadio === "4"}
                                title="Yellow"
                                color="yellow" outerStyle={{ marginBottom: 20 }}
                                onChange={this.handleRadioChange}
                                value="4"
                            />
                            <Radio checked={checkedRadio === "5"}
                                title="Dark"
                                color="dark" outerStyle={{ marginBottom: 20 }}
                                onChange={this.handleRadioChange}
                                value="5"
                            />
                        </div>
                        <div style={{ borderLeft: '1px solid #EEE', paddingLeft: 30, marginLeft: 10 }}>
                            <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                                {`import { Radio } from 'ui';\n\nconst { checkedRadio } = this.state;\n\n<Radio title="Default"\n    checked={checkedRadio === "1"}\n    onChange={this.handleRadioChange}\n    value="1"\n/>\n<Radio title="Red"\n    checked={checkedRadio === "2"}\n    color="red"\n    onChange={this.handleRadioChange}\n    value="2"\n/>\n<Radio title="Green"\n    checked={checkedRadio === "3"}\n    color="green"\n    onChange={this.handleRadioChange}\n    value="3"\n/>\n<Radio title="Yellow"\n    checked={checkedRadio === "4"}\n    color="yellow"\n    onChange={this.handleRadioChange}\n    value="4"\n/>\n<Radio title="Dark"\n    checked={checkedRadio === "5"}\n    color="dark"\n    onChange={this.handleRadioChange}\n    value="5"\n/>`}
                            </SyntaxHighlighter>
                        </div>
                    </Panel>
                </div>
            </div>
        );
    }
}
