import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import langs from './langs.json';
import style from './style.styl';

export class Syntax extends Component {
    static propTypes = {
        lang: PropTypes.oneOf(langs),
        classes: PropTypes.shape({
            container: PropTypes.string,
        }),
    };

    static defaultProps = {
        lang: 'jsx',
        classes: {
            container: '',
        },
    };

    render() {
        const {
            children,
            classes,
            lang,
            ...props
        } = this.props;

        const containerClassNames = classNames(style.container, classes.container);

        return <div {...props} className={containerClassNames}>
            <SyntaxHighlighter language={lang} style={coy} wrapLines>
                {children}
            </SyntaxHighlighter>
        </div>;
    }
}
