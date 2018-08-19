import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Checkbox extends Component {
    static propTypes = {
        checked: PropTypes.bool.isRequired,
        color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
        styles: PropTypes.objectOf(PropTypes.string),
        title: PropTypes.string.isRequired,
    };

    static defaultProps = {
        styles: {
            body: '',
            title: '',
        },
    };

    id = Math.random();

    render() {
        const { color, title, styles, ...props } = this.props;

        return (
            <div className={`${style.container} ${styles.body}`}>
                <input className={`${style.input} ${style[color]} ${styles.input}`} type="radio" id={this.id} {...props} />
                <label htmlFor={this.id} className={style.label}>
                    <span className={`${style.title} ${styles.title}`}>{title}</span>
                </label>
            </div>
        );
    }
}
