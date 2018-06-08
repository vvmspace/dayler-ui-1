import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
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

    handleChangeNavState = () => {
        const { expanded, onChange } = this.props;

        onChange(!expanded);
    };

    render() {
        const { expanded, routes } = this.props;

        return (
            <div className={`${style.container} ${expanded ? style.expanded : null}`}>
                <div className={style.header}>
                    <div className={style.action}>
                        <Icon className={style.icon}
                            onClick={this.handleChangeNavState}
                            name={`chevron-${expanded ? 'left' : 'right'}`}
                            size={34}
                        />
                    </div>
                    <div className={style.logo}></div>
                </div>

                <ul className={style.body}>
                    {routes.map(route => (
                        <NavigationItem key={Math.random()}
                            expanded={expanded}
                            href={route.href}
                            icon={route.icon}
                            title={route.title}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
