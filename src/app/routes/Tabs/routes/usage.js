import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';

import * as examples from '../examples';

export default class UsageRoute extends Component {
    render() {
        return <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
            {examples.tabsUsage}
        </SyntaxHighlighter>;
    }
}
