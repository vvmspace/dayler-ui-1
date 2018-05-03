import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.styl';

export default class Button extends Component {
    static propTypes = {
        color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
    };

    static defaultProps = {
        type: 'button',
    }

    state = {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
    }

    handleMouseDown = event => {
        const { left, top, width } = this.button.getBoundingClientRect();

        this.ripple.classList.remove(styles.animate);
        this.button.offsetTop; // Gansta-hook for refresh animation;

        this.setState({
            height: width,
            width: width,
            left: event.clientX - left - width/2,
            top: event.clientY - top - width/2,
        });

        this.ripple.classList.add(styles.animate);
    }

    render() {
        const { color, title, type, ...props } = this.props;
        const { ...rippleStyle } = this.state;

        return (
            <button className={`${styles.button} ${styles[color]}`}
                onMouseDown={this.handleMouseDown}
                type={type}
                ref={referance => this.button = referance}
                {...props}>
                <div className={styles.ripple} style={rippleStyle}
                    ref={referance => this.ripple = referance}></div>
                <div className={styles.title}>{title}</div>
            </button>
        );
    }
}
