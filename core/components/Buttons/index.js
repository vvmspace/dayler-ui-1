import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Loading from '../Loading';

import style from './style.styl';

const defatulPropTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['dark', 'red', 'green', 'yellow']),
    isLoading: PropTypes.bool,
    type: PropTypes.string,
};

const defatulProps = {
    className: '',
    color: 'dark',
    type: 'button',
};

export class Button extends Component {
    static propTypes = {
        ...defatulPropTypes,
        title: PropTypes.string.isRequired,
    };

    static defaultProps = defatulProps;

    state = {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
    }

    handleMouseDown = event => {
        const { left, top, width } = this.button.getBoundingClientRect();

        this.ripple.classList.remove(style.animate);
        this.button.offsetTop;

        this.setState({
            height: width,
            width: width,
            left: event.clientX - left - width/2,
            top: event.clientY - top - width/2,
        });

        this.ripple.classList.add(style.animate);
    }

    render() {
        const { ...rippleStyle } = this.state;
        const { className, color, isLoading, title, type, ...props } = this.props;

        return (
            <button className={`${style.button} ${style[color]} ${className}`}
                onMouseDown={this.handleMouseDown}
                type={type}
                ref={referance => this.button = referance}
                {...props}>
                <div className={style.ripple} style={rippleStyle}
                    ref={referance => this.ripple = referance}></div>
                {isLoading ? <Loading size={20} styles={{ body: style.loading }} /> : null}
                <div className={`${style.title} ${isLoading ? style.hidden : ''}`}>{title}</div>
            </button>
        );
    }
}

export class IconButton extends Button {
    static propTypes = {
        ...defatulPropTypes,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string,
    };

    static defaultProps = defatulProps;

    render() {
        const { ...rippleStyle } = this.state;
        const { className, color, icon, isLoading, title, type, ...props } = this.props;

        return (
            <button className={`${style.button} ${style.buttonIcon} ${style[color]} ${className}`}
                onMouseDown={this.handleMouseDown}
                type={type}
                ref={referance => this.button = referance}
                {...props}>
                <div className={style.ripple} style={rippleStyle}
                    ref={referance => this.ripple = referance}></div>
                {isLoading ? <Loading size={20} styles={{ body: style.loading }} /> : null}
                <div className={`${style.icon} ${isLoading ? style.hidden : ''}`}><Icon size={18} name={icon} /></div>
                {title ? <div className={`${style.title} ${isLoading ? style.hidden : ''}`} style={{ top: 1 }}>{title}</div> : null}
            </button>
        );
    }
}
