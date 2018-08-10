import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import style from './style.styl';

export default class Panel extends Component {
    static propTypes = {
        className: PropTypes.string,
        icon: PropTypes.string,
        styles: PropTypes.objectOf(PropTypes.string),
        title: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };

    static defaultProps = {
        icon: '',
        title: '',
        styles: {
            body: '',
            header: '',
            title: '',
        },
    };

    render() {
        const { children, className, icon, styles, title, ...props } = this.props;

        const headerIcon = icon
            ? <Icon name={icon} size={16} className={style.icon} />
            : null;

        const header = title
            ? <div className={`${style.header} ${styles.header}`}>
                {headerIcon}
                <span className={`${styles.title}`}>{title}</span>
            </div>
            : null;

        return <div className={`${style.container} ${className}`} {...props}>
            {header}
            <div className={`${style.body} ${styles.body}`}>
                {children}
            </div>
        </div>;
    }
}
