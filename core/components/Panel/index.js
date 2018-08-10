import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Panel extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        className: PropTypes.string,
    };

    render() {
        const { children, className, ...props } = this.props;

        return <div className={`${style.container} ${className}`} {...props}>
            <div className={style.body}>
                {children}
            </div>
        </div>;
    }
}
