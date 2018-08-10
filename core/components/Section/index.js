import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Section extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        className: PropTypes.string,
        title: PropTypes.string,
    };

    render() {
        const { children, className, title, ...props } = this.props;

        return <div className={`${style.container} ${className}`} {...props}>
            {title ? <span className={style.title}>{title}</span> : null }
            {children}
        </div>;
    }
}
