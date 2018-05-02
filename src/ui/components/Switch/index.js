import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.styl';

export default class Checkbox extends Component {
    static propTypes = {
        color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
        outerStyle: PropTypes.object,
        title: PropTypes.string,
    }

    state = {
        id: Math.random(),
    }

    render() {
        const { color, outerStyle, title, ...props } = this.props;
        const { id } = this.state;

        return (
            <div className={styles.group} style={outerStyle}>
                <span className={styles.title}>{title}</span>
                <div className={styles.wrapper}>
                    <input className={`${styles.input} ${styles[color] || ''}`} type="checkbox" id={id} {...props} />
                    <label htmlFor={id} className={styles.label}></label>
                </div>
            </div>
        );
    }
}
