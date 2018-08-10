import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon';
import style from './style.styl';

export default class NavigationItem extends Component {
    static propTypes = {
        expanded: PropTypes.bool.isRequired,
        href: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

    static defaultProps = {
        expanded: true,
    };

    isActive = (match, location) => {
        return match && match.url === '/' + location.pathname.split('/')[1];
    };

    render() {
        const { expanded, href, icon, title, ...props } = this.props;

        return <li className={`${style.container} ${expanded ? style.expanded : null}`} {...props}>
            <NavLink className={style.href}
                to={href}
                isActive={this.isActive}
                activeClassName={style.active}>
                <Icon className={style.icon}
                    name={icon}
                />
                <span className={style.title}>
                    {title}
                </span>
            </NavLink>
        </li>;
    }
}
