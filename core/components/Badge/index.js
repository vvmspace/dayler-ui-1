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
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(allowedTypes),
    };

    static defaultProps = {
        type: 'dark',
    };

    render() {
        const { title, type, ...props } = this.props;

        return <div className={`${style.container} ${style[type]}`} {...props}>
            {title}
        </div>;
    }
}
