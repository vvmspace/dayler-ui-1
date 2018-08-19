import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as style from './style.styl';

const allowedTypes = [
    'dark',
    'green',
    'red',
    'yellow',
];

export default class CheckedBadge extends Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(allowedTypes),
    };

    static defaultProps = {
        className: '',
        type: 'dark',
    };

    render() {
        const { checked, className, title, type, ...props } = this.props;

        return <div className={`${style.container} ${style[type]} ${checked ? style.active : null} ${className}`} {...props}>
            {title}
        </div>;
    }
}
