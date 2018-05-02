import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import styles from './styles.styl';

export default class Panel extends Component {
    static propTypes = {
        icon: PropTypes.string,
        innerStyle: PropTypes.object,
        outerStyle: PropTypes.object,
        title: PropTypes.string,
    }

    render() {
        const { children, icon, innerStyle, outerStyle, title, ...props } = this.props;

        const headerIcon = icon
            ? <div className={styles.icon}>
                <Icon size={16} name={icon} />
            </div>
            : null;

        const header = title
            ? <div className={styles.header}>
                {headerIcon}
                <div className={styles.title}>{title}</div>
            </div>
            : null;

        return (
            <div className={styles.panel} style={outerStyle}>
                {header}
                <div className={styles.body} style={innerStyle} {...props}>
                    {children}
                </div>
            </div>
        );
    }
}
