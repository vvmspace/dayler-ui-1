import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.styl';

export default class Input extends Component {
    static propTypes = {
        white: PropTypes.bool,
        type: PropTypes.string.isRequired,
        label: PropTypes.string,
        outerStyle: PropTypes.object,
    };

    static defaultProps = {
        type: 'text',
        outerStyle: {},
    };

    elemntId = Math.random();

    render() {
        const { white, type, label, outerStyle, ...props } = this.props

        return (
            <div className={styles.group} style={outerStyle}>
                {label ? <label className={styles.label} htmlFor={this.elemntId}>{label}</label> : null}
                <input type={type}
                    id={this.elemntId}
                    className={`${styles.input} ${white ? styles.white : null}`}
                    {...props}
                />
            </div>
        )
    }
}
