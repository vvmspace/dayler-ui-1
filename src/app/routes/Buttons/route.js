import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Link } from 'react-router-dom';
import { Button, IconButton, Panel, Section } from 'dayler-ui';

import * as examples from './examples';
import style from './style.styl';

export default class ButtonsRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Buttons</span>
                <span className={style.description}>
                    Buttons overview
                </span>
            </div>

            <Section title="Default Buttons">
                <Panel>
                    <Button title="Next" color="dark" className={style.button} />
                    <Button title="Next" color="red" className={style.button} />
                    <Button title="Next" color="green" className={style.button} />
                    <Button title="Next" color="yellow" />
                </Panel>

                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.defaultButtons}
                    </SyntaxHighlighter>
                </Panel>
            </Section>

            <Section title="Disabled Buttons">
                <Panel>
                    <Button title="Next" color="dark" disabled className={style.button} />
                    <Button title="Next" color="red" disabled className={style.button} />
                    <Button title="Next" color="green" disabled className={style.button} />
                    <Button title="Next" color="yellow" disabled />
                </Panel>
                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.disabledButtons}
                    </SyntaxHighlighter>
                </Panel>
            </Section>

            <Section title="Icon Buttons">
                <Panel>
                    <IconButton icon="cloud-off" color="dark" className={style.button} />
                    <IconButton icon="chevrons-right" color="red" className={style.button} />
                    <IconButton icon="printer" title="print" color="green" className={style.button} />
                    <IconButton icon="chevrons-right" title="Next" color="yellow" className={style.button} />
                    <IconButton color="red" icon="crop" title="Apply" />
                </Panel>
                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.iconButtons}
                    </SyntaxHighlighter>
                </Panel>
            </Section>

            <Section title="Link Buttons">
                <Panel>
                    <Link to="/buttons">
                        <IconButton icon="share" color="dark" className={style.button} />
                    </Link>
                    <Link to="/buttons">
                        <IconButton icon="slack" color="red" className={style.button} />
                    </Link>
                    <Link to="/buttons">
                        <IconButton icon="twitter" title="Twitter" color="green" className={style.button} />
                    </Link>
                    <Link to="/buttons">
                        <Button title="Next" color="yellow"/>
                    </Link>
                </Panel>
                <Panel>
                    <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                        {examples.linkButtons}
                    </SyntaxHighlighter>
                </Panel>
            </Section>
        </div>;
    }
}
