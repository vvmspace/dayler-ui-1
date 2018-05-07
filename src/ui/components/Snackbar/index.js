import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './stylus.styl';

export default class Snacbar extends Component {
    static propTypes = {
        duration: PropTypes.number.isRequired,
        node: PropTypes.string,
        onMount: PropTypes.func.isRequired,
        position: PropTypes.oneOf(['NW', 'N', 'NE', 'SW', 'S', 'SE']).isRequired,
        type: PropTypes.oneOf(['dark', 'yellow', 'red', 'green']).isRequired,
    };

    static defaultProps = {
        duration: 4000,
        position: 'NE',
        type: 'dark',
    };

    state = {
        messages: [],
        type: 'dark',
    };

    getPosition = position => {
        switch (position) {
        case 'NW':
            return {
                left: 7,
                top: 7,
            };

        case 'N':
            return {
                left: '50%',
                marginLeft: `-${150}px`,
                top: 7,
            };

        case 'NE':
            return {
                right: 7,
                top: 7,
            };

        case 'SW':
            return {
                bottom: 7,
                left: 7,
            };

        case 'S':
            return {
                bottom: 7,
                left: '50%',
                marginLeft: `-${200}px`,
            };

        case 'SE':
            return {
                bottom: 7,
                right: 7,
            };
        }
    };

    getPushDirection = position => {
        return position.charAt(0) === 'N'
            ? 'UP'
            : 'DOWN';
    };

    handleClose = key => () => {
        const { messages } = this.state;
        const messageIndex = messages.findIndex(message => message.key === key);

        clearInterval(this.state.messages[messageIndex].destroy);
        this.setState({
            messages: messageIndex !== -1
                ? [ ...messages.slice(0, messageIndex), ...messages.slice(messageIndex + 1)]
                : [...messages],
        });
    };

    open = (title, options = {}) => {
        const { duration, position, type } = this.props;
        const { messages } = this.state;

        const key = Math.random();
        const message = {
            key,
            title,
            type: options.type || type,
            destroy: setTimeout(() => {
                const messageIndex = this.state.messages.findIndex(m => m.key === key);
                this.setState({
                    messages: messageIndex !== -1
                        ? [ ...this.state.messages.slice(0, messageIndex), ...this.state.messages.slice(messageIndex + 1)]
                        : [...this.state.messages],
                });
            }, options.duration || duration),
        };

        return new Promise(resolve => {
            this.setState({
                messages: this.getPushDirection(position) === 'UP'
                    ? [message, ...messages]
                    : [...messages, message],
            }, resolve);
        });
    };

    componentDidMount() {
        const { onMount } = this.props;

        onMount(this.open);
    }

    render() {
        const { node, position } = this.props;
        const { messages } = this.state;

        const SnackbarElement = (
            <div className={styles.container}
                style={{...this.getPosition(position)}}
                ref={referance => this.container = referance}>
                {messages.map(message => (
                    <div className={`${styles.snack} ${styles[position.toLowerCase()]} ${styles[message.type]}`}
                        key={message.key}
                        onClick={this.handleClose(message.key)}>
                        {message.title}
                    </div>
                ))}
            </div>
        );

        return node
            ? ReactDOM.createPortal(SnackbarElement, document.getElementById(node))
            : SnackbarElement;
    }
}
