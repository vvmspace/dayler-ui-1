import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };

    render() {
        const { children } = this.props;

        return <div className={style.container}>
            {children}
        </div>;
    }
}
