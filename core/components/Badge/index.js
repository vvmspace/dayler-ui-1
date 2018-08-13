import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as style from './style.styl';

const allowedTypes = [
    'dark',
    'green',
    'red',
    'yellow',
];

export default class Badge extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(allowedTypes),
    };

    static defaultProps = {
        className: '',
        type: 'dark',
    };

    render() {
        const { className, title, type, ...props } = this.props;

        return <div className={`${style.container} ${style[type]} ${className}`} {...props}>
            {title}
        </div>;
    }
}
