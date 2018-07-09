import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Content extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        expanded: PropTypes.bool.isRequired,
    };

    render() {
        const { expanded } = this.props;

        return (
            <div className={`${style.container} ${expanded ? style.expanded : null}`}>
                {this.props.children}
            </div>
        );
    }
}
