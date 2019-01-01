import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { Icon } from 'dayler-ui';

import style from './style.styl';

@withRouter
export class NavigationItem extends PureComponent {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        simple: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        simple: false,
    };

    state = {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
    };

    handleMouseDown = event => {
        const { left, top, width } = this.container.getBoundingClientRect();

        this.ripple.classList.remove(style.animate);
        this.container.offsetTop;

        this.setState({
            height: width,
            width: width,
            left: event.clientX - left - width/2,
            top: event.clientY - top - width/2,
        });

        this.ripple.classList.add(style.animate);
    };

    render() {
        const { children, icon, simple, to } = this.props;

        const containerClssNames = classNames(
            style.container,
            {
                [style.min]: simple,
            }
        );

        return <NavLink exact to={to}
            innerRef={referance => this.container = referance}
            onMouseDown={this.handleMouseDown}
            className={containerClssNames}
            activeClassName={style.active}>
            <div className={style.ripple} style={{ ...this.state }}
                ref={referance => this.ripple = referance}></div>
            <Icon className={style.icon} name={icon} />
            <span className={style.title}>
                {children}
            </span>
        </NavLink>;
    }
}
