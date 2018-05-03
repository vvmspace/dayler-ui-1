import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Button from './button.default';
import styles from './styles.styl';

export default class IconButton extends Button {
    static propTypes = {
        color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
        icon: PropTypes.string.isRequired,
        title: PropTypes.string,
        type: PropTypes.string,
    };

    static defaultProps = {
        type: 'button',
    }

    render() {
        const { color, icon, title, type, ...props } = this.props;
        const { ...rippleStyle } = this.state;

        return (
            <button className={`${styles.button} ${styles.buttonIcon} ${styles[color]}`}
                onMouseDown={this.handleMouseDown}
                type={type}
                ref={referance => this.button = referance}
                {...props}>
                <div className={styles.ripple} style={rippleStyle}
                    ref={referance => this.ripple = referance}></div>
                <div className={styles.icon}><Icon size={18} name={icon} /></div>
                {title ? <div className={styles.title}>{title}</div> : null}
            </button>
        );
    }
}
