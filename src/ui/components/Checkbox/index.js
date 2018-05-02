import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.styl';

export default class Checkbox extends Component {
    static propTypes = {
        color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
        innerStyle: PropTypes.object,
        outerStyle: PropTypes.object,
        title: PropTypes.string.isRequired,
    }

    state = {
        id: Math.random(),
    }

    render() {
        const { color, innerStyle, outerStyle, title, ...props } = this.props;
        const { id } = this.state;

        return (
            <div className={styles.group} style={outerStyle}>
                <input className={`${styles.input} ${styles[color]}`} type="checkbox" id={id} {...props} />
                <label htmlFor={id} className={styles.label}>
                    <span className={styles.title} style={innerStyle}>{title}</span>
                </label>
            </div>
        );
    }
}
