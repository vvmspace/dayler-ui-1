import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import ClickOutside from '../ClickOutside';
import NavigationItem from '../NavigationItem';
import style from './style.styl';

export default class Navigation extends Component {
    static propTypes = {
        expanded: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
        routes: PropTypes.array.isRequired,
    };

    static defaultProps = {
        expanded: true,
    };

    state = {
        isNavigationShown: false,
    };

    handleChangeNavigationState = () => {
        const { expanded, onChange } = this.props;

        onChange(!expanded);
    };

    handleNavigationShown = () => {
        const { isNavigationShown } = this.state;

        this.setState({ isNavigationShown: !isNavigationShown });
    };

    handleCloseNavigation = () => {
        this.setState({ isNavigationShown: false });
    };

    handleCloseNavigationByItem = () => {
        setTimeout(() => this.setState({ isNavigationShown: false }), 50);
    };

    render() {
        const { expanded, routes } = this.props;
        const { isNavigationShown } = this.state;

        return (
            <div className={`${style.container} ${expanded ? style.expanded : null}`}>
                <ClickOutside onClickOutside={this.handleCloseNavigation}>
                    <div className={style.header}>
                        <div className={style.action}>
                            <Icon className={style.icon}
                                onClick={this.handleChangeNavigationState}
                                name={`chevron-${expanded ? 'left' : 'right'}`}
                                size={34}
                            />
                            <Icon className={style.menuIcon}
                                onClick={this.handleNavigationShown}
                                name={`${isNavigationShown ? 'x' : 'menu'}`}
                                size={34}
                            />
                        </div>
                        <div className={style.logo}></div>
                    </div>
                    <ul className={`${style.body} ${isNavigationShown ? style.isNavigationShown : null}`}>
                        {routes.map(route => (
                            <NavigationItem key={Math.random()}
                                onClick={this.handleCloseNavigationByItem}
                                expanded={expanded}
                                href={route.href}
                                icon={route.icon}
                                title={route.title}
                            />
                        ))}
                    </ul>
                </ClickOutside>
            </div>
        );
    }
}
