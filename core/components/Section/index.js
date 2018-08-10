import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Section extends Component {
    static propTypes = {
        className: PropTypes.string,
        styles: PropTypes.objectOf(PropTypes.string),
        title: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };

    static defaultProps = {
        styles: {
            body: '',
            title: '',
        },
    };

    render() {
        const { children, className, styles, title, ...props } = this.props;

        return <div className={`${style.container} ${className}`} {...props}>
            {title ? <span className={`${style.title} ${styles.title}`}>{title}</span> : null }
            <div className={styles.body}>
                {children}
            </div>
        </div>;
    }
}
