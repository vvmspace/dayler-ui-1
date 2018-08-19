import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Panel, Radio, Section } from 'dayler-ui';

import * as examples from './examples';
import style from './style.styl';

export default class SwitchesRoute extends Component {
    state = {
        checkedRadio: "0",
    };

    handleRadioChange = event => {
        const { value } = event.target;
        this.setState({ checkedRadio: value });
    }

    render() {
        const { checkedRadio } = this.state;

        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Switches</span>
                <span className={style.description}>
                    Checkboxes, Radio and Switch buttons overview
                </span>
            </div>
            <Section title="Radio">
                <Panel>
                    <Radio checked={checkedRadio === "0"}
                        styles={{ body: style.radio }}
                        title="Default"
                        onChange={this.handleRadioChange}
                        value="0"
                    />
                    <Radio checked={checkedRadio === "1"}
                        styles={{ body: style.radio }}
                        title="Red"
                        color="red"
                        onChange={this.handleRadioChange}
                        value="1"
                    />
                    <Radio checked={checkedRadio === "2"}
                        styles={{ body: style.radio }}
                        title="Green"
                        color="green"
                        onChange={this.handleRadioChange}
                        value="2"
                    />
                    <Radio checked={checkedRadio === "3"}
                        styles={{ body: style.radio }}
                        title="Yellow"
                        color="yellow"
                        onChange={this.handleRadioChange}
                        value="3"
                    />
                    <Radio checked={checkedRadio === "4"}
                        title="Dark"
                        color="dark"
                        onChange={this.handleRadioChange}
                        value="4"
                    />
                </Panel>
                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.radio}
                    </SyntaxHighlighter>
                </Panel>
            </Section>

            <Section title="Checkbox">
                ...
            </Section>

            <Section title="Switch">
                ...
            </Section>
        </div>;
    }
}
