import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.styl';

export default class Input extends Component {
    static propTypes = {
        label: PropTypes.string,
        outerStyle: PropTypes.object,
        type: PropTypes.string.isRequired,
        white: PropTypes.bool,
    };

    static defaultProps = {
        outerStyle: {},
        type: 'text',
    };

    state = {
        id: Math.random(),
    }

    render() {
        const { label, outerStyle, type, white ...props } = this.props;
        const { id } = this.state;

        return (
            <div className={styles.group} style={outerStyle}>
                {label ? <label className={styles.label} htmlFor={id}>{label}</label> : null}
                <input type={type}
                    id={id}
                    className={`${styles.input} ${white ? styles.white : null}`}
                    {...props}
                />
            </div>
        );
    }
}
