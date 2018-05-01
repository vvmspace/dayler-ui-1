import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.styl';

export default class Input extends Component {
    static propTypes = {
        white: PropTypes.bool,
        type: PropTypes.string.isRequired,
        label: PropTypes.string,
        groupStyle: PropTypes.object,
    };

    static defaultProps = {
        type: 'text',
        groupStyle: {},
    };

    elemntId = Math.random();

    render() {
        const { white, type, label, groupStyle, ...props } = this.props

        return (
            <div className="input-text__group" style={groupStyle}>
                {label ? <label className="input-text__label" htmlFor={this.elemntId}>{label}</label> : null}
                <input type={type}
                    id={this.elemntId}
                    className={`input-text ${white ? 'input-text--white' : null}`}
                    {...props}
                />
            </div>
        )
    }
}
